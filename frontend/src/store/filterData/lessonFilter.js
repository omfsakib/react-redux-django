export const selectLessonsByCourseId = (state, courseId) => {
    return state.lessons.lessons.filter((lesson) => lesson.course === courseId);
  };
