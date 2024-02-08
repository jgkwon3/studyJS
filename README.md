
# MISSION

## 🔍 진행방식

- fork를 연습하고 commit 연습이 주된 목적
- commit message를 주의하고 올리기
- 깃허브와 친해지기
- js ,css, html 파일 구조로 만들기

## ✉️ 미션 제출 방법

미션 제출은 무조건 fork를 통해 제출한다.
  
### 1.  본인의 계정에 fork 하기
     
  ![image](https://github.com/I-on-I/StudyGit/assets/75532258/ef807f5d-ddb0-470f-84ae-b1263ccbd18b)

  바로 `create fork`
  
  ![image](https://github.com/I-on-I/StudyGit/assets/75532258/8af4c93a-8046-4d36-9462-eb4f5704e3d7)

     이렇게 하면 본인 계정에 `{혜경 or 종구의 git Name}/jsStudy` repository 생성
<br/>

### 2. fork한 저장소를 자신의 컴퓨터로 clone하기

  코드 복사 버튼을 눌러 복사를 한다.
  
  ![image](https://github.com/I-on-I/studyJS/assets/75532258/623966c1-3bb7-4cde-a253-e0345170636c)

  ```bash
  git clone https://github.com/{본인_아이디}/{저장소 아이디}.git
  ```
  저장할 곳은 어디든 상관 없음(본인이 어디 있는지만 알면 됨)
  아까 복사한 거 그대로 vscode 에 넣기


  vscode에서 작업을 시작한다.
  
     ```bash
     code studyJS
     ```
     
  ![image](https://github.com/I-on-I/studyJS/assets/75532258/cb80e61d-05eb-467a-80fb-6d9e3ebe4aab)
  
<br/>

### 3. 작업 시작

  - 각자의 폴더에서 주어진 숙제 해결하기
    
  ![image](https://github.com/I-on-I/studyJS/assets/75532258/db7b231a-4001-4c7e-b30c-93ca681e2e0d)

### 4. git에 올리기 ✨ (중요)
  - 모든 작업이 끝났다면 경로를 파악해보자 (작업을 어디서 했는지 꼭 기억해보세요)

  ex) 나는 `종구` 라는 폴더에서 html,js,css 작업을 했어! 
  
  ![image](https://github.com/I-on-I/studyJS/assets/75532258/7673286b-34ff-44c9-80c2-313a04a9fa9b)

  ### 그렇다면 여기서 git에 올리는 겁니다. 

  ![image](https://github.com/I-on-I/studyJS/assets/75532258/d1033c36-565d-4d59-8713-203b7aa9a65d)

  여기 아닙니다.☹️

  - 작업 했던 종구(혜경) 폴더에 모든 것들을 올리자!
    
  ```bash
  git add .
  ```

  - commit message를 통해 다른 개발자들도 이해하기 쉽게 올려보자 !(형식 중요시 하기)

  ```bash
  git commit -m "커밋 메세지"
  ```

  - git push

  ```bash
  git push origin main(or master)
  ```

  여기까지 했다면 공용 깃 레퍼지토리에 올라간 것이 아닌 본인의 깃에 올라간 겁니다.

<br/>

### 5. pull request

  마지막 작업입니다. main으로 보내는 작업이고 본인의 작업물을 합치는 작업입니다.

  1. 본인의 계정에 pull requests 선택하기

     ![image](https://github.com/I-on-I/studyJS/assets/75532258/5ab069ca-90dc-4fed-8adf-13bef8369b83)

  2. main으로 보내기

     ![image](https://github.com/I-on-I/studyJS/assets/75532258/fe7ef003-cfca-4fff-b8ce-8c1a5837f939)

  3. create pull request 누르면 보내집니다!



    
