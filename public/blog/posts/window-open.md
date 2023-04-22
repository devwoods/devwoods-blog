---
id: window-open
title: window.open을 사용할 때 알아두면 좋은 점
date: 2023-04-20
category: javascript
thumb_nail: /blog/images/window-open/test2.png
summary: window.open()을 사용하면서 새롭게 알게된 내용을 정리하였다.
---

# window.open을 사용할 때 알아두면 좋은 점

## Intro

**window.open**을 사용하면 해당 메서드를 호출한 페이지에서 새로운 창 또는 탭이 열리도록 할 수 있다. 최근에 모니터링 관련 기능을 개발하면서 새로운 창을 100개 이상 열어야했고, 새로운 창에서는 WebSocket을 통한 통신이 이루어졌다. 이때 100개 이상 열었을 때 성능에는 문제가 없는지 궁금해서 테스트를 해봤고 새로운 사실을 알 수 있었다. 그래서 이번에 **window.open**을 사용할 때 알아두면 좋은 점을 정리해보려고 한다.

## window.open()은 어떻게 사용할까?

window.open()은 다음 예시 코드처럼 간단하게 사용할 수 있으며 3개의 파라미터를 전달할 수 있다. 첫 번째 파라미터에 URL을 전달하면 해당 URL이 새 탭으로 열리게 된다.

```jsx
const handleClick = () => {
  window.open("https://www.google.com");
};
```

또한 두 번째 파라미터인 target을 통해 새 창이 열릴 위치를 지정할 수 있다.

- \_blank : 링크가 새 창에서 열린다.
- \_self : 링크가 현재 창에서 열린다.
- \_parent : 링크가 부모 창에서 열린다.
- \_top : 링크가 최상위 창에서 열린다.

마지막으로 세 번째 파라미터에는 스타일 등의 속성을 문자열로 전달할 수 있다.

## window.open()을 사용할 때 주의할 점

먼저 첫 번째로 **Tabnabbing** 공격을 방어해야 한다. Tabnabbing 공격은 다음 순서로 진행된다.

1. A라는 페이지에 접속
2. 해당 페이지에서 새로운 페이지로 이동할 수 있는 외부링크 클릭
3. 새로운 페이지에서 기존 A페이지를 가리키는 opener로 기존 A페이지를 다른 페이지로 유도
4. A페이지에 돌아왔을 때 사용자가 입력한 정보에 대해 피싱

하지만 위의 문제는 2016년부터 크롬에서 window.open()을 \_blank로 열 때, 새 페이지에서 opener를 갖지못하도록 속성이 설정되어있어서 방어가 가능하다.

두 번째 문제는 이 글을 쓰는 이유에 있는데 **같은 도메인의 다른 페이지를 새 창으로 열었을 때, 새 창과 부모 창의 메모리와 자원이 공유된다는 것이다.** 그렇기 때문에 부모 창과 새 창에서 높은 수준의 연산이 필요한 작업을 한다면 성능이 떨어질 수 있다.

이를 알아보기 위한 간단한 테스트를 준비했다. 페이지 내에서 10ms마다 랜덤한 숫자를 출력한다. 그리고 새롭게 열린 창에서도 10ms마다 랜덤한 숫자를 출력하도록 하였다. 이를 크롬의 Performance로 측정하였다.

먼저 아래의 사진은 새 창을 열지 않았을 때의 결과이다. 약 4초 동안 Javascript 연산을 실행하는데 극히 적은 시간을 사용했다.

![test1.png](/blog/images/window-open/test1.png)

반면 아래의 결과는 새로운 창 10개를 열고 부모 창에서 측정한 것이다. 약 4초 동안 3분의 1에 해당되는 시간이 Javascript 연산을 실행하는데 사용되었다.

![test2.png](/blog/images/window-open/test2.png)

위의 결과를 통해 새로운 창을 열었을 때 부모 창과 메모리와 자원이 공유된다는 것을 확인할 수 있다.

## noopener, noreferrer

위의 두 가지 문제를 해결하기 위해 noopener 또는 noreferrer 속성을 사용할 수 있다. 두 개의 속성은 다음과 같은 특징이 있다.

- noopener

noopener는 새 창이나 탭에서 Javascript를 사용하여 원래 페이지의 window객체에 접근하는 것을 막는다.

- noreferrer

noreferrer는 새 창이나 탭에서 HTTP Referrer를 차단한다. 이를 통해 부모 페이지의 URL정보가 새 창에 전달되지 않는다.

따라서 두 개의 속성을 다음과 같이 추가하면 부모 창과 새 창이 독립적인 메모리와 자원을 갖도록 할 수 있다.

```jsx
const handleClick = () => {
  window.open("https://www.google.com", "_blank", "noopener, noreferrer");
};
```

아래 그림은 noopener 속성을 추가한 상태에서 위와 같이 동일하게 테스트를 진행한 결과이다. 새 창을 열지 않았을 때와 동일하게 약 4초 동안 Javascript 연산에 극히 적은 시간이 사용되었다.

![test3.png](/blog/images/window-open/test3.png)

## 정리
