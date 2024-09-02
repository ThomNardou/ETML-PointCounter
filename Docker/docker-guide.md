# Guide to setup docker

## Tools Needed
- Docker version 25.0.3 or a later version

## Guide

In the root of the project and open a cmd. Type this command: 

```cmd
  docker compose up -d
```

Open then your web browser and search `localhost:8081`, you will reach the adminer web page.

You will then put the following values:
| Parameter | Value    | 
| -------- | ------- |
| `System` | postgreSQL |
| `Server` | postgres |
| `Username` | root |
| `Password` | root |
| `Database` | db_PointCounter |

You should now be able to access the database. 

If you have any question or difficulty you can contact one of the authors.

| <h4><a href="https://github.com/LucasSimoesPolvora">@LucasSimoesPolvora</a></h4> |
| ------------- |
| <img src="https://avatars.githubusercontent.com/u/122774951?v=4" style="width: 250"/>  |
