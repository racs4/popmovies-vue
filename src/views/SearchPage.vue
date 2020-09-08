<template>
  <div>
    <div class="search-page mb-5" v-if="!loading">
        <div class="container" v-if="searchResult.results.length">
            <Section :title="`${searchResult.total_results} results were found...`">
              <h4 class="text-right">
                Page {{ $route.params.page }} of {{ searchResult.total_pages }}
              </h4>
              <div class="row">
                <CardMovie
                  class="col-lg-2 col-sm-3 col-6 mb-5"
                  v-for="item in searchResult.results"
                  :key=item.id
                  style="height: 250px;"
                  :movie="item"
                />
              </div>
            </Section>
            <Pagination
            :page="$route.params.page"
            :total-pages="searchResult.total_pages"
            :baseLink="`/search/${$route.params.query}`"/>
        </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardMovie from '@/widgets/CardMovie.vue';
import Loader from '@/widgets/Loader.vue';
import Pagination from '@/widgets/Pagination.vue';
import Section from '@/components/Section.vue';

export default {
  name: 'SearchPage',
  components: {
    CardMovie, Section, Loader, Pagination,
  },
  methods: {
    ...mapActions(['setSearchResult']),
  },
  computed: {
    ...mapGetters(['searchResult', 'loading']),
  },
  created() {
    console.log(this.$route.params);
    this.setSearchResult({ query: this.$route.params.query, page: this.$route.params.page });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.$route.params);
    console.log(to);
    this.setSearchResult({ query: to.params.query, page: to.params.page });
    next();
  },
};
</script>

<style>

.search-page {
    margin-top: 20vh;
}

</style>
