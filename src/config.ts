export default {
  SERVER: {
    SETTINGS: {
      PORT:3999
    },
    ROUTES: {
      INDEX:'/api',
      STUDENTS: {
        STUDENTS_LIST:'/estudiantes',
        ADD_STUDENT:'/estudiantes/nuevo',
        MODIFY_STUDENT:'estudiante/'
      },
      COURSES:{
        COURSES_LIST:'/cursos',
        COURSES_BY_STUDENT: '/cursos/estudiante',
        ADD_COURSE:'/cursos/nuevo',
        DELETE_COURSE: '/cursos/eliminar'
        
      }


    }
  },
  DATABASE: {
    HOST: "www.db4free.net",
    DBPORT: 3306,
    DBUSER: "aauser",
    DBPWD: "aapassword***",
    DBNAME: "aulasamigas",
  }
}