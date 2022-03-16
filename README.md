# 케어닥 간병인 신청 서비스

간병인을 찾기 위해 돌봄 유형, 스케줄, 주소, 연락처 등의 정보를 입력하여 간병인 신청 정보를 등록하는 서비스입니다.

## 사용한 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=Emotion&logoColor=000"/>

## 프로젝트 실행 방법

- 배포 사이트 : https://caredoc.vercel.app/

- 로컬 
1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-6.git`
2. `npm install`
3. `npm run start`

   
## 프로젝트 구조

```
--📁 src
  ---📁 api ➡ 데이터를 불러오는 로직을 담은 폴더
  ---📁 assets ➡ 아이콘 등의 에셋 폴더
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  ---📁 context ➡ context API를 담은 폴더
  ---📁 layouts ➡ 재사용을 위해 레이아웃 분리
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
  ---📁 temp ➡ 데이터 폴더
  ---📁 utilities ➡ 모듈화된 함수를 모아둔 폴더
```

## 팀 멤버

| 이름                                       | 직책 | 역할                                       |
| ------------------------------------------ | ---- | ----------------------------------- |
| [✏️예효은](https://github.com/ye-yo)       | 팀장 | 공통 컴포넌트 및 주소 입력 페이지 구현             |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 전화번호 인증 기능 및 신청완료 페이지 구현         |           
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 스케줄 입력 페이지 구현  |
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | 개발 환경 구축 및 기간 선택 캘린더 구현          |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 시작화면 및 돌봄유형 선택 페이지 구현              |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 공통 컴포넌트 및 주소 API 통한 주소 검색 기능 구현 |


---

## 구현한 기능 목록

- 시작 화면
- 돌봄 유형 선택
- 스케줄 입력 및 캘린더 통한 기간 선택
- 주소 검색 및 상세 주소 입력
- 신청 정보 확인 및 전화번호 인증
- 신청 완료 화면
---

## 박진용

#### 구현한 방법

- [`StepApplymentBrief`](./src/pages/StepApplymentBrief.jsx) 페이지를 구현했습니다. 이미 피그마로 작성되어 있어 공통으로 사용되는 컴포넌트는 별도의 파일로 분리하여 관리했습니다.
  
- 위 페이지에서 [Naver SENS API](https://www.ncloud.com/product/applicationService/sens)를 이용해 휴대폰 인증을 구현했습니다. 처음엔 [Twilio SMS API](https://www.twilio.com/sms)를 이용했다가, Trial 버전은 인증된 휴대폰으로만 전송이 가능하다는 문제와 요금 문제로 Naver SENS API로 변경했습니다.
  
- Twilio를 이용할 때 제공되는 모듈이 server-side 밖에 지원하지 않아서 간단한 서버가 필요했습니다. [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) 기능을 알게되었고, 간단한 serverless 함수를 통해 api를 제공했습니다. API 변경 후에도 코드 분리에 이점이 있어 이를 유지하기로 결정했습니다.

- 요청되었는지, 전송 중인지, 잘못된 응답이 왔는지, 인증이 되었는지 등에 따라 UI를 변경하거나 안내 메시지를 띄워 사용자가 현재 상태를 확실히 알 수 있도록 하였습니다.

- Vercel과 원격 저장소를 연결하여 배포까지 완료했습니다.

#### 어려웠던 점 (에러 핸들링)

- 휴대번호 인증 기능을 구현하면서 Twilio SMS API를 이용했으나 인증된 번호에만 전송 가능한 문제와 trial 버전에서의 한계로 Naver SENS API로 변경하여 문제를 해결했습니다.

## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 문선경

https://user-images.githubusercontent.com/52448114/157107918-80640368-8e02-419e-8442-40680fb237f5.mov

- @ye-yo님이 프로젝트 개발환경을 설정한 후에, eslint, prettier lint-staged 등으로 컨벤션 설정을 했습니다.
- 스케줄 입력 페이지에서, 날짜를 선택할 수 있는 Date picker 컴포넌트를 구현했습니다.

### 구현한 방법

#### date picker 구현

- Context API 사용 :
    
    캘린더의 각 날짜 요소들을 컴포넌트로 분리하여 이벤트 처리 등을 하기 위해 아토믹한 패턴으로 구현했는데,  
    그러다보니 depth가 깊어져서 캘린더 뷰 컴포넌트에서 Day 컴포넌트에 도달하기까지  
    props drilling이 발생하는 문제가 있었습니다.  
    이 문제를 해결하기 위해서 DateContext를 생성해서 date picker 관련 상태와 함수들을  
    컨텍스트로 관리했습니다.  
    
    참고) 컴포넌트 구조
    
      {/* ScheduleModal 컴포넌트 */}
      <ScheduleModal>
        <Header />
        <CalendarView>
          <Calender />
          <Devider />
          <Calendar />
        </CalendarView>
      </ScheduleModal>;
      
      {/* Calendar 컴포넌트 */}
      <Calendar>
        <CalendarHeader />
        <CalendarBody>
          <WeekTitle />
          <Week>
            <DayCell><Day /></DayCell>
            <DayCell><Day /></DayCell>
            ...
          </Week>
          <Week />
          <Week />
          ...
        </CalendarBody>
      </Calendar>
    
    
- 케어닥 홈페이지에 실제로 구현되어 있는 Date picker 동작을 분석하여 최대한 동일하게 기능을 구현했습니다.  
    구현한 기능들은 다음과 같습니다.  
    
    - 시작일-종료일 범위 지정 기능
    - 한 화면에 달력 두 개씩 보여주기 (이번 달, 다음 달 달력)
    - prev month, next month 버튼을 눌러서 이전 달, 다음 달로 이동할 수 있음
    - 지난 날짜는 회색으로 표시하고 클릭 이벤트 비활성화
    - 오늘 날짜는 회색 배경으로 강조 


- Date Picker 컴포넌트는 페이지가 아닌 별도의 모달로 만들어 구현했습니다.  
    저희 팀은 page frame 컴포넌트를 만들고, 바뀌는 부분만 children으로 전달해 사용하면서,  
    각 page 간에 차이가 있는 부분들을 props을 사용해 변경을 해주는 방식을 사용했는데요.  
    Date Picker의 경우 다른 page들과 차이가 나는 부분이 많아서  
    props 전달이 많아지는 점이 비효율적이라고 생각해서 모달로 구현했습니다.  
    

### 어려웠던 점 (에러 핸들링)

- week 컴포넌트, day 컴포넌트 등 배열로 사용하는 컴포넌트가 많고,  
    이러한 컴포넌트들은 전부 유니크한 키값이 필요한데,  
    되도록이면 컴포넌트 의미에 맞는 키값을 주고 싶어서 처음에는 날짜를 활용해서 키값을 주었습니다.  
    날짜로 키값을 주려면 컴포넌트 구조 상 반복문에서 iterator를 키에 포함시켜야 했는데,  
    iterator를 사용해 키값을 주다보니 버그가 종종 발생했습니다.  
    
    => react-uuid 패키지를 설치해서 uuid() 메소드로 키값을 생성하여 문제를 해결했습니다.  
    
- Date 객체를 비교할 때, 시간을 제외하고 날짜만 비교해야할 필요가 있었고,  
    두 Date 객체의 일치 여부도 비교해야 했는데  
    일반적인 Date 객체 사용법으로는 구현할 수가 없는 이슈가 있었습니다.  
    Date 객체 자체는 숫자나 문자열로 변환하지 않는 이상  
    비교 연산은 가능하지만 동등/일치 연산을 할 수가 없기 때문입니다.   
    
    => Date 객체를 문자열로 변환하여 동등/일치 비교 연산을 하는 함수를 따로 만들어서 사용했습니다.  
    그리고 이 함수 안에서 toDateString() 메소드를 사용해서,  
    시간을 제외한 날짜만 문자열로 변환해 날짜만 비교할 수 있도록 처리했습니다.  


## 심채윤

시작 화면 및 돌봄 유형 선택 페이지 구현

#### 구현한 방법

시작화면 페이지에서 `CardContainer` 내에 글을, `ButtonContainer` 안에 신청하기 버튼을 넣어 주었습니다. 돌봄 유형 선택 페이지에서는 24시간 상주 또는 시간제 돌봄을 선택할 수 있고, 선택한 유형의 배경색을 `background: ${props.theme.mainColor}`로 주어 주황색으로 변하게끔 구현 하였습니다.

#### 어려웠던 점 (에러 핸들링)

첫 페이지 화면에서 신청하기 버튼을 클릭 시, 다음 페이지로 넘어갈 수 있게 구현하려고 하였습니다. 다음 페이지로 넘어가지 않은 문제가 발생하였습니다. 팀원분의 코멘트를 통해  `<ButtonContainer onClick={() => setCurrentStep({ ...currentStep, number: 0 })}>` 을 `step`은 객체로, `number` 값을 주어서 `step` 페이지를 띄울 수 있도록 변경하였습니다.


## 예효은

공통 컴포넌트인 Step, Footer 및 주소 입력 페이지 구현

### 구현한 방법

#### Step 컴포넌트

step 컴포넌트는 현재 step에 따라 내용이 다르게 렌더링 될 수 있도록 Context API로 `StepContext`를 생성하여 step 내부의 페이지 컴포넌트에서 제목이나 footer 숨김 여부 등을 처리할 수 있게 하였습니다. 또한 전체 스텝 페이지가 모두 동일한 레이아웃은 아니기 때문에 footer 숨김여부, title 숨김여부를 `hideFooter`, `hideTitle` 로 전달할 수 있게 하여 페이지 별로 레이아웃을 다르게 구성할 수 있게 하였습니다.

```js
export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: null,
    stepName: '',
    stepTitle: '',
    hideFooter: false,
    hideTitle: false,
    hideHeader: false,
  },
  setCurrentStep: () => {},
});
```

이번 프로젝트에서는 router를 사용하지 않기로 해서 router 없이도 페이지 전환이 가능하도록 구현이 필요했습니다.
이에 `step`이란 컴포넌트 배열을 만들어서 step 페이지를 순서대로 저장해두고, 렌더링 시에는 `currentStep` state의 number 값에 따라 해당하는 컴포넌트가 렌더링 될 수 있게 하였습니다.

```js
{
  !!currentStep.number ? <FirstPage /> : <Step>{step[currentStep.number - 1]}</Step>;
}
```

#### Footer 컴포넌트

footer 컴포넌트는 이전, 다음 스텝으로의 페이지 전환과 버튼 활성화/비활성화 기능을 구현해야 했습니다. 이를 위해서 footer 컴포넌트 내부에서 button click 이벤트를 구현하였고 버튼을 활성화 시킬지 여부는 각각의 페이지에서 처리할 수 있도록 하기 위해서 `FooterContext`를 생성하였습니다.

```js
export const FooterContext = createContext({
  activeNext: false,
  setActiveNext: () => {},
});
```

#### SearchBox 컴포넌트 및 주소 입력 페이지

`<SearchBox/>` 컴포넌트는 주소 입력 페이지 및 검색 페이지에서 활용되어 컴포넌트로 분리하여 구현했습니다. 다만, 주소 입력 페이지에서는 입력을 막고 클릭시 modal창이 오픈되도록 해야 했기때문에 `readonly` props 및 `handleBoxClick()` 메소드를 전달받아 처리하도록 만들었습니다.
주소 입력 페이지는 주소 및 상세 주소가 모두 작성되었는지 확인하여 footer의 `activeNext` 값을 true/false로 처리하였습니다. 또한 주소 값이 있을 경우에는 재검색 버튼이 나타나도록 만들었습니다.

### 어려웠던 점 (에러 핸들링)

- 공통 state의 대해 논의 부족 문제
  : 공통으로 다루는 state에 대한 논의를 부족한 상태로 개발에 들어가서 개발하면서 회의가 거듭되어서 아쉬운 점이 있었습니다. 이를 통해서 개발도 중요하지만 설계 과정도 매우 중요하다는 것을 다시 느끼게 되었습니다.

- `<SearchBox/>` 구현 방식 문제
  : `<SearchBox/>` 구현 시, 제가 생각하는 구현 방식과 팀원 간의 의견이 상이한 부분이 있었습니다. GitHub PR 기능을 통해서 다양한 의견을 들어볼 수 있었고, 이에 적합한 방식으로 수정을 할 수 있었습니다. 또한 실제 사이트가 존재한다면 최대한 참고하여 기능을 구현하는 것도 좋은 방법이라는 것을 느꼈습니다.


## 이예지

#### 구현한 방법

#### 공통 Header 만들기

`Figma`에서 Header를 비교한 결과 "모달의 Header"와 "돌보미 신청하기 Header"부분이 유사하다고 생각하여 합쳐서 만들면 좋겠다는 생각을 하였습니다. 
이전 버튼, 제목 부분, 닫힌 버튼 3영역으로 나누어서 개발을 하였습니다. 
하지만 이전 버튼을 사용할 때에는 닫힌 버튼이 보이지 않아야 하기 때문에 prev를 props로 추가하면 이전 버튼이 보이도록 설정하였습니다.
Hearder를 이용하여 title, prev, close를 사용할 수 있도록 개발하였습니다. 기존에는 true, false로 비교를 할 수 있도록 하였지만 Boolean 변수는 직접 화면에 출력할 수 없기 때문에 toString()함수를 이용하여 문자열로 변환해야하였습니다. 문자열로 비교하는 방법보다 팀원분의 추천을 받아서 1, 0으로 비교할 수 있도록 하였습니다.
"돌보미 신청하기 Header부분"
```jsx
<Header title="돌보미 신청하기" prev />
```
"모달의 Header"
```jsx
<Header title="주소검색" close setIsModalOpen={setIsModalOpen} />
```
#### 검색 Modal 만들기

공공 데이터 주소 API를 이용하여 데이터를 불러와 사용자가 선택한 주소에 대해 결과값을 Context API에 저장하는 부분을 맡았습니다. 처음에는 fetch를 이용하였지만, axios 라이브러리를 사용하면 조금 더 코드를 줄일 수 있을 것 같아서 코드를 리팩토링하였습니다. 또한 hooks 폴더 안에 데이터를 불러오는 로직을 작성하는 방법과 API 폴더 안에 파일을 옮기는 등 수 많은 시도 끝에 에러를 해결해 나가면서 해당되는 기능을 만들 수 있었습니다.


#### 어려웠던 점 (에러 핸들링)

- `hooks 폴더에 데이터 불러오는 로직 작성하기`
기본적으로 hooks 폴더에는 use로 시작되는 파일명을 작성해주는 것이 원칙이라고 들었었습니다. 그렇기에 useJuso라는 파일명을 작성하고, 그 부분을 onchange에 데이터가 바뀌면 호출될 수 있도록 작성하였지만, use로 시작되는 custom hook은 콜백함수처럼 사용할 수 없다는 에러 문구를 보고 api라는 폴더를 만들어서 getJusoAPI파일를 생성한 후 오류를 해결할 수 있었습니다.

- `async 비동기 함수로 인해 결과값이 Promise로 나오는 현상`
jsx파일에서 비동기함수로 데이터를 불러올 때는 성공 시에 값이 반환되었습니다. 하지만 파일을 불리하고 나니 성공 시에든 실패 시에든 결과 값이 Promise로 나오게 되었고, 실제 값을 꺼내기 위해 하루종일 해결방법을 찾으려고 노력하였습니다. 왜 Promise로 나오는지 너무 궁금해서 검색 시에 나오는 해당 글을 전부 읽어보고 해결법을 찾으려고 하였습니다. 비동기 함수를 사용하면 항상 리턴 값을  promise로 나오는 게 원칙이다.라는 글을 보게 되었습니다. 그 후 .then을 이용하면 결과 값이 바로 console.log에 찍히는 것을 확인하였고, 그 안에서 useState를 이용하여 데이터를 담아서 활용하였습니다.

- `Context API를 한번에 묶기`
여러 개의 context API를 사용하게 되었고, App.jsx에서 파일이 점차 많아져서 깊어지는 게 코드가 보기 불편하다라는 생각을 가지게 되었습니다. 
```jsx
return (
  <Step.Provider>
    <Footer.Provider>
      ....
    </Footer.Provider>
  </Step.Provider>
)
```
그리하여 배열의 내장함수 reduce 와 리액트 컴포넌트의 createElement 를 활용하여 아래와 같이 코드를 만들어서 좀 더 보기 좋게 변경하였습니다.
```jsx
const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

const App = () => {
  return (
    <AppProvider
      contexts={[StepContext, FooterContext, AddressContext]}
    >
     {currentStep.number < 0 ? <FirstPage /> : <Step>{step[currentStep.number]}</Step>}
    </AppProvider>
  );
};
```
하지만 context API를 이용하여 해당되는 페이지를 변경해주는 로직이라 currentStep에 대한 데이테가 변경되는 것을 하위컴포넌트부터 발생되어진다는 것을 알게 되었고, 페이지 결과를 변경시켜주는 Router를 하위컴포넌트로 수정하자라는 생각을 통해 성공할 수 있었습니다.