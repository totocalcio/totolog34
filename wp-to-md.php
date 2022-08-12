<?php
setlocale(LC_ALL, 'ja_JP.UTF-8');
define('DB_HOST', 'localhost');
define('DB_NAME', '');
define('DB_USER', '');
define('DB_PASSWORD', '');
define('DB_CHARSET', 'utf8');

try {
    $dbh = new PDO(
        sprintf(
            "mysql:dbname=%s;host=%s;charset=%s;",
            DB_NAME,
            DB_HOST,
            DB_CHARSET
        ),
        DB_USER,
        DB_PASSWORD
    );
} catch (PDOException $e) {
    echo "connect fail: " . $e->getMessage() . "\n";
    exit(1);
}

$items = getItems();

$counter = 0;
$pathList = [];
foreach ($items as $row) {
    $id = $row['ID'];
    $taxonomy = getTagsById($id);
    $tags = [];
    foreach ($taxonomy as $tag) {
        $tag = mb_strtolower($tag['name']);
        $tags[$tag] = 1;
    }
    $tags = array_keys($tags);
    $thumbnail = '';
    $thumbnail = getThumbnailById($id);
    if (count($thumbnail) > 0) {
        $thumbnail = $thumbnail[0]['url'];
    } else {
        $thumbnail = '';
    }

    $oldPath = $id;
    $counter++;
    $newPath = $row['ID'];
    _mkdir("./blog/" . $row['ID']);
    // thumbnail
    try {
        $content = file_get_contents('https://totolog34.com/'. $oldPath);
        if (!$content) {
            continue;
        }
        if ($thumbnail) {
            $thumbnail = saveThumbnail($thumbnail,$newPath);
        }
    } catch (Exception $e) {
        echo($e);
        continue;
    }
    // MD file
    $result = flushFile([
        'title' => $row['post_title'],
        'date' => $row['post_date'],
        'content' => $row['post_content'],
        'thumbnail' => $thumbnail,
        'path' => "/".$newPath,
        'tags' => json_encode($tags, JSON_UNESCAPED_UNICODE),
    ]);
    file_put_contents('./blog/' . $row['ID'] . '/index.md', $result);
    $pathList[] = [
        'fromPath' => $oldPath,
        'toPath' => $newPath,
    ];
}
exit(0);



function getItems()
{
    global $dbh;
    $sql = "
    SELECT *
    FROM
    wp_posts
    WHERE
    post_status = 'publish'
    AND  post_title <> ''
    ";
    $prepare = $dbh->prepare($sql);
    $prepare->execute();
    $result = $prepare->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function getTagsById($id)
{
    global $dbh;
    $sql = "
    select
    term_taxonomy.taxonomy,
    terms.name
    from wp_posts posts
    inner join wp_term_relationships term_relationships on posts.id = term_relationships.object_id
    inner join wp_term_taxonomy term_taxonomy on term_relationships.term_taxonomy_id = term_taxonomy.term_taxonomy_id
    inner join wp_terms terms on term_taxonomy.term_id = terms.term_id
    where
    posts.ID = :id
    ";
    $prepare = $dbh->prepare($sql);
    $prepare->bindValue(':id', $id, PDO::PARAM_INT);
    $prepare->execute();
    $result = $prepare->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function getThumbnailById($id)
{
    global $dbh;
    $sql = "
    select
    thumbnail.guid as url
    from wp_posts posts
    inner join wp_postmeta postmeta on posts.ID = postmeta.post_id
    inner join wp_posts thumbnail on postmeta.meta_value = thumbnail.ID
    where
    posts.ID = :id
    AND postmeta.meta_key = '_thumbnail_id'
    ";
    $prepare = $dbh->prepare($sql);
    $prepare->bindValue(':id', $id, PDO::PARAM_INT);
    $prepare->execute();
    $result = $prepare->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

function _mkdir($dir)
{
    if (!is_dir($dir)) {
        `mkdir -p $dir`;
    }
}

function saveThumbnail($thumbnailPath,$newPath)
{
    $dstPath = "";
    $parsedUrl = parse_url($thumbnailPath);
    $parsedPath = pathinfo($parsedUrl['path']);
    $dstPath = $parsedPath['basename'];

    $thumbnail = $parsedPath['basename'];

    $rawImg = file_get_contents($thumbnailPath);
    file_put_contents('./blog/'. $newPath . '/' . $dstPath, $rawImg);
    return $thumbnail;
}

function flushFile($arg)
{
    $title = $arg['title'];
    $date = $arg['date'];
    $content = $arg['content'];
    $tags = $arg['tags'];
    $path = $arg['path'];
    $thumbnail = $arg['thumbnail'];
    return <<<EOT
---
slug: $path
date: "$date"
title: $title
thumbnail: $thumbnail
tags: $tags
---
# $title
$content
EOT;
}

function console_log($data){
    echo '<script>';
    echo 'console.log('.json_encode($data).')';
    echo '</script>';
  }