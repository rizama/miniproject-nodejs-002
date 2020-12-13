# Mini Project Nodejs 002

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```

## 1). List - Show All Employees

```
[ENDPOINT](GET) /api/employees
```

```url
[EXAMPLE] https://localhost:5000/api/employees
```

## 2). Detail - Show One Employee

```
[ENDPOINT](GET) /api/employees/{id}
```

```url
[EXAMPLE] https://localhost:5000/api/employees/1
```

### URI params

| params |    desc     | required |
| ------ | :---------: | :------: |
| {id}   | Employee ID |  `yes`   |

## 3). Insert - Insert Data Employee

```
[ENDPOINT](POST) /api/employees/
```

```url
[EXAMPLE] https://localhost:5000/api/employees/
```

```json
{
	"name": "Santana",
	"phone_number": "085659123456",
	"job_title": "Frontend"
}
```

## 4). Update - Update Data Employee

```
[ENDPOINT](PUT) /api/employees/1
```

```url
[EXAMPLE] https://localhost:5000/api/employees/1
```

```json
{
	"name": "Rob Thomas",
	"phone_number": "085659123456",
	"job_title": "Frontend"
}
```

### URI params

| params |    desc     | required |
| ------ | :---------: | :------: |
| {id}   | Employee ID |  `yes`   |

## 5). Delete - Remove Data Employee

```
[ENDPOINT](DELETE) /api/employees/1
```

```url
[EXAMPLE] https://localhost:5000/api/employees/1
```

### URI params

| params |    desc     | required |
| ------ | :---------: | :------: |
| {id}   | Employee ID |  `yes`   |

## 6). Reverse Function - Reverse Character

```
[ENDPOINT](POST) /api/reverse/
```

```url
[EXAMPLE] https://localhost:5000/api/reverse/
```

```json
{
	"character": "sam"
}
```

## 7). Fibonacci Function - Show n Fibonacci

```
[ENDPOINT](POST) /api/fibonacci/
```

```url
[EXAMPLE] https://localhost:5000/api/fibonacci/
```

```json
{
	"n": 5
}
```

## 7). combination Function - Show Result of Combination

```
[ENDPOINT](POST) /api/combination/
```

```url
[EXAMPLE] https://localhost:5000/api/combination/
```

```json
{
    "n": 40,
    "r": 20
}
```