# MSW를 이용한 Mock API 명세서

## 1. 카드 생성하기

### Request

- URL: api/cards
- Method: POST
- Header: Content-Type: multipart/formdata
- Body:
  - id: string
  - title: string
  - description: string
  - photo?: File
  - like: boolean

### Response

```
{
  "id": 3,
  "title": "Horse",
  "description": "A cute horse.",
  "photo": "http:~~",
  "like": false
}
```

## 2. 카드 목록 불러오기

### Request

- URL: api/cards
- Method: GET

### Response

```
{
  [
    {
      id: "1",
      title: "Cat",
      description: "A cute cat.",
      photo: cat,
      like: false,
    },
    {
      id: "2",
      title: "Dog",
      description: "A cute dog.",
      photo: dog,
      like: false,
    },
  ]
}
```

## 3. 카드 좋아요 수정하기

### Request

- URL: api/cards/:id
- Method: PUT

### Response

```
{
  "id": 3,
  "title": "Horse",
  "description": "A cute horse.",
  "photo": "http:~~",
  "like": true
}
```

## 4. 카드 삭제하기

### Request

- URL: api/cards/:id
- Method: DELETE

### Response

```
{
  "id": 3,
  "title": "Horse",
  "description": "A cute horse.",
  "photo": "http:~~",
  "like": true
}
```