<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick} class="dark:text-white">
  clicks: {count}
</button>
