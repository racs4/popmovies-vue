<template>
   <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
        <li class="page-item" :class="{ disabled: !isTherePreviousPage } ">
          <router-link
            class="page-link"
            :to="`${baseLink}/${pageNumber - 1}`"
            tabIndex="-1"
            aria-disabled="true"
          >
            Previous
          </router-link>
        </li>
        <li v-if="isTherePreviousPage" class="page-item">
          <router-link class="page-link" :to="`${baseLink}/${pageNumber - 1}`">
            {{pageNumber - 1}}
          </router-link>
        </li>
        <li class="page-item active disabled">
          <router-link class="page-link" :to="`${baseLink}/${pageNumber}`">
            {{pageNumber}}
          </router-link>
        </li>
        <li v-if="isThereNextPage" class="page-item">
          <router-link class="page-link" :to="`${baseLink}/${pageNumber + 1}`">
            {{pageNumber + 1}}
          </router-link>
        </li>
        <li class="page-item" :class="{ disabled: !isThereNextPage }">
          <router-link class="page-link" :to="`${baseLink}/${pageNumber + 1}`">Next</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    baseLink: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isTherePreviousPage() { return this.pageNumber > 1; },
    isThereNextPage() { return this.pageNumber < this.totalPages; },
    pageNumber() { return Number(this.page); },
  },
};
</script>

<style>
.page-link {
    background-color: black;
    border: 1px solid #251010;
    color: lightcyan;
}

.page-link:hover {
    background-color: #251010;
    border: 1px solid #251010;
    color: lightcyan;
}

.page-item.disabled .page-link {
    background-color: black;
    border: 1px solid #251010;
    color: gray;
}

.page-item.active .page-link {
    background-color: #251010;
    border: 1px solid #251010;
    color: gray;
}

.page-item.disabled {
    cursor: not-allowed;
}
</style>
