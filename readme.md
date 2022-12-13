# Prueba Técnica Aulas Amigas
## Reto
_Desarrollar una aplicación web o móvil sencilla que permita gestionar adecuadamente un
listado de estudiantes con sus cursos._

## Instalación
luego de clonar el repositorio, se debe ejecutar el instalador de npm desde el directorio raiz del proyecto:

```
npm install
```
Para construir el proyecto que será desplegado a producción, se ejecuta la instrucción _tsc_. Esta ejecución creará la carpeta _build_ en la raiz del proyecto:
```
npm run tsc
```
Para ejecutar el contenido de dicha carpeta build, se usa la instrucción start:
```
npm run start
```
Por último, si se requiere ejecutar el servidor en ambiente de desarrollo, sin necesidad de construir la app, se usa _dev_. Esta instrucción hace uso de la librería _ts-node-dev_, que reinicia automáticamente el servidor después de guardar cambios:
```
npm run dev
```
Cuando el servidor se ejecuta correctamente, la consola mostrará el mensaje:
```
*********************************
     Data Base connected
     Server on port 3999
*********************************
```
La información de conexión de la base de datos, las rutas principales y otras configuraciones globales se encuentran el en archivo _config.ts_, lo cual permite cambiarlas sin tener que afectar las demás capas de la app.

## Esquema de base de datos
Para la conexión con la base de datos se usa TypeORM, con una base de datos publicada en la nube (db4free.net)

### Colección de Estudiantes
```js
import { Test_course } from "./cursos.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity({ name: "test_students" })
export class Test_student extends BaseEntity {
  //Clave primaria:
  @PrimaryGeneratedColumn()
  s_id: number;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  lv_id: number;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone_number?: string;

  @Column({ nullable: true })
  geolocation: string;

  @Column({ default: 1 })
  status: number;

  //Relación de muchos a muchos con la tabla test_courses_x_students:
  @ManyToMany(() => Test_course, (test_course) => test_course.estudiantes)
  //Se usa joinTable para indicar que el estudiante es el propietario de los cursos, y no al revés:
  @JoinTable({name:'test_courses_x_student'})
  cursos: Test_course[];
}                                         
```

### Colección de Cursos
```js
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Test_student } from "./estudiantes.entity";

@Entity({ name: "test_courses" })
export class Test_course extends BaseEntity {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  name: string;

  @Column({ default: 1 })
  credits: number;

  //Relación con la tabla test_courses_x_student:
  @ManyToMany(() => Test_student, (test_student) => test_student.cursos)
  estudiantes: Test_student[];
}
```

### Colección de cursos por estudiante
```js
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@Entity({ name: "test_courses_x_student" })
export class Test_courses_x_student extends BaseEntity {
  @PrimaryGeneratedColumn()
  cxs_id: number;

  @Column()
  c_id: number;

  @Column()
  s_id: number;
}
```



## Rutas de la API
Se usa como directorio raiz la ruta **'/api'**.
Desde este directorio, se crean dos rutas: **'/estudiantes**' y **'/cursos'**
* **(GET) '/api/estudiantes/'** Permite listar estudiantes. No requiere enviar parámetros.

* **(POST) '/api/estudiantes/nuevo'** Permite la creación de un nuevo estudiante. Se deben enviar por body los siguientes parámetros:
  ```json
  {
    "first_name" : "Elver",
    "last_name" : "Gomez Torba",
    "lv_id" : "1",
    "group" : "2",
    "email" : "Elvergo@mestorba.com",
    "phone_number" : "55522789745",
    "geolocation" : "05121121584.4"
  }
  ```
* **(PUT) '/api/estudiantes/:id'** Actualiza la información de los estudiantes. El body puede llevar uno, varios, o todos los siguientes parámetros:
  ```json
  {
    "first_name": "Aitor",
    "last_name": "Menta",
    "lv_id": 1,
    "group": "A",
    "email": "aitor@google.com",
    "phone_number": "345346-54",
    "geolocation": "10.253652685182912,-75.34695290787532",
    "status": 1
  }
  ```
* **(GET) '/api/cursos/'** Devuelve todos los cursos en el sistema. No requiere ningún parámetro.
* **(GET) '/api/cursos/estudiante/:id'** Recupera todos los cursos de un estudiante dado: su parámetro de búsqueda es el id del estudiante.

* **(POST) '/api/cursos/nuevo'** Permite registrar un nuevo curso a un estudiante, se deben enviar por body los siguientes parámetros: 
  ```json
    {
      "c_id": 5,
      "s_id": 1
    }
  ```
* **(DELETE)'/api/cursos/'** Elimina un curso para un usuario dado. Se deben enviar por body los siguientes parámetros:
  ```json
    {
      "c_id": 5,
      "s_id": 1
    }
  ```

