<script>
    export let samplePost
</script>

<div class="samplePostCard card">

    <div class="card-header">
        <h3>{samplePost.name}</h3>
    </div>

    <div class="user-infos">
        <div class="user-infos__item">
            <p>Artist</p>
            <p>{samplePost.user.username}</p>
        </div>
        <div class="user-infos__item">
            <p>Posted at</p>
            <p>{samplePost.createdAt}</p>
        </div>
    </div>


</div>