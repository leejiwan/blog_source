---
layout: post
title: "react hook"
date: 2022-08-14 00:00:00 +0530
categories: Javascript
comments: true
---

1. 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState

- 리액트 컴포넌트 개발방식은 두 개 클래스형 컴포넌트, 함수형 컴포넌트
  state나 life cylcle 사용시 클래스형 사용해옴

- 동적인 상태값을 state라고 부름 컴포넌트으 상태값이 바뀔 경우 상태를 관리해주어야 함
  16.8 버전부터 hooks 기능 도입하여 함수형 컴포넌트에서도 state 관리가 가능해짐

- 상단에 import {useState} from 'react' <- import

- let [현재상태값변수, 상태값 갱신해주는 함수] = useState(상태의 초기값)

- 갱신 된 state 렌더링 {}

```javascript
import { useState } from "react";

function test() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <Yellowbtn
        bg="red"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button
      </Yellowbtn>
    </div>
  );
}
```

2. 컴포넌트가 렌더링 될 떄 특정 작업을 실행할 수 있도록 하는 Hook useEffect

```javascript
/*
기본형태
*/
useEffect(()=>{
   // mount
  console.log('open');

  return() => {
    // unmount
    console.log('close');
  }
},[]);


/*
렌더링 할 떄 한번, 그리고 어떠한 작은 요소라도 변화한다면 useEffect 실행
*/
useEffect(()=>{
  console.log(test);
});
/*
렌더링 할 때 useEffect 한 번만 사용
*/
useEffect(()=>{
  console.log(test2);
}, []);
/*
배열안 변수값이 변할 때 마다 실행
*/
let [age, setAge] = useState();
useEffect((
  console.log(test3);
)=>{}, [age]);
```
