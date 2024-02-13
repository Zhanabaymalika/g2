<template>
  <div>
    <h1>Gallery</h1>
    <ul>
      <li v-for="student in students" :key="student.id" @click="goToStudentPage(student)">
        {{ student.name }} - {{ student.grade }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  data() {
    return {
      students: [
        { id: 1, name: 'Alice', grade: 'A' },
        { id: 2, name: 'Bob', grade: 'B' },
        { id: 3, name: 'Charlie', grade: 'C' },
        // Добавьте других учеников по аналогии
      ]
    };
  },
  methods: {
    goToStudentPage(student) {
      // Переход на другую страницу с информацией об ученике
      this.$router.push({ name: 'StudentInfo', params: { id: student.id } });
    }
  }
};
</script>

<style scoped>
/* Здесь можно добавить стили для компонента */
</style>
