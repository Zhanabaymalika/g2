<template>
    <div>
      <h1>Student Information</h1>
      <div v-if="student">
        <h2>{{ student.name }}</h2>
        <p>Grade: {{ student.grade }}</p>
        <p>Contact: {{ student.contact }}</p>
        <!-- Добавьте другие поля, если необходимо -->
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudentInfo',
    data() {
      return {
        student: null
      };
    },
    created() {
      // Здесь можно получить информацию об ученике по его ID и сохранить в this.student
      const studentId = this.$route.params.id;
      // Вам нужно реализовать логику получения информации об ученике, например, из API или хранилища
      // В этом примере я создам моковые данные
      this.student = {
        id: studentId,
        name: 'Alice',
        grade: 'A',
        contact: 'alice@example.com'
      };
    }
  };
  </script>
  
  <style scoped>
  /* Стили для компонента */
  </style>
  