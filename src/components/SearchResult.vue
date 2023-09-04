<template>
    <div class="searchResult">
      <h1>Step 2 - Select time</h1>
      <ul class="resultList">
        <li>18:00 <button>select</button></li>
        <li>20:00 <button>select</button></li>
      </ul>
    </div>
</template>

<style scoped>
  .searchResult {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .resultList {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  h1 {
        color: azure;
    }

    form {
        color: azure;
    }

    li {
      color: azure;
    }

</style>