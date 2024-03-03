Bienvenido a nuestra aplicación de gestión de tareas. Nuestra plataforma ofrece una manera conveniente y eficiente de registrar y organizar tus tareas diarias. Con un diseño intuitivo y fácil de usar, puedes crear, clasificar y realizar un seguimiento de tus tareas de manera efectiva.

**Características principales:**

1. **Registro de tareas:** Con nuestra aplicación, puedes registrar fácilmente tus tareas introduciendo los detalles pertinentes, como el título de la tarea, la descripción y la fecha de vencimiento. Una vez registradas, tus tareas se almacenan en nuestra base de datos para que puedas acceder a ellas en cualquier momento.
2. **Clasificación de tareas:** Las tareas registradas se clasifican en tres categorías principales: "Pendientes", "Cumplidas" y "Fallidas". Esta clasificación se basa en el estado de cumplimiento de cada tarea. Puedes cambiar el estado de una tarea entre "Cumplida" y "No cumplida" con un simple clic, lo que te permite mantener un seguimiento claro de tu progreso.
3. **Visualización organizada:** Nuestra aplicación presenta una interfaz clara y organizada que te permite visualizar tus tareas de manera eficiente. Las tareas se muestran en listas separadas según su estado de cumplimiento, lo que facilita la identificación y gestión de las tareas pendientes y completadas.
4. **Fácil de usar:** Diseñamos nuestra aplicación pensando en la facilidad de uso y la accesibilidad. Con una interfaz intuitiva y funcionalidades simples, puedes gestionar tus tareas de manera rápida y sin complicaciones, lo que te permite concentrarte en lo más importante.

**Requisitos para usar la aplicación:**

Para utilizar nuestra aplicación, necesitarás tener instalado y configurado JSON Server, un servidor JSON de código abierto que nos proporciona la infraestructura necesaria para almacenar y gestionar tus tareas. Asegúrate de especificar tres endpoints en tu archivo JSON para almacenar las tareas según su estado: "pendientes", "cumplidas" y "fallidas".

### json-server

El siguiente código muestra la estructura del JSON que se debe utilizar para almacenar las tareas en nuestra aplicación de gestión de tareas. El JSON está organizado en tres arreglos principales: "pendientes", "cumplidas" y "fallidas". Cada uno de estos arreglos representa un estado diferente de las tareas: las tareas pendientes son aquellas que aún no se han completado, las tareas cumplidas son aquellas que se han completado con éxito y las tareas fallidas son aquellas que no se han completado según lo previsto. Esta estructura permite una fácil clasificación y gestión de las tareas, lo que facilita su seguimiento y organización en la aplicación.



`{
  "pendientes": [],
  "cumplidas": [],
  "fallidas": []
}`

