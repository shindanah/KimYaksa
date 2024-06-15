# 김약사 (KimYaksa) #
### 1. 프로젝트 소개 ###
김약사는 타깃 사용자인 노년층이 간편하게 알약 정보를 조회하고 알약 복용을 관리하는 것을 돕는 어플리케이션입니다. 
### 2. 시스템 요구사항 ###
* Client
* Server
    * Node.js v12 이상
    * npm 또는 yarn 패키지 매니저 (npm 사용 권장)
    * mongoDB
### 3. 설치 및 실행 ###
* __Client__
* __Server__
    __1. [Node.js](<https://nodejs.org/>)를 설치합니다.__
    __2. 레포지토리를 클론합니다:__
    ```bash
    git clone <https://github.com/Ewhacapston-Team4/KimYaksa.git>
    cd KimYaksa/server
    ```
    __3. 필요한 패키지를 설치합니다:__
    ```bash
    npm install
    ```
    또는
    ```bash
    yarn install
    ```
    __4. server 폴더 내의 `.env` 파일을 설정합니다. `.env.example` 파일을 참고하여 데이터베이스 접속 정보와 환경 변수들을 설정합니다.__
    ```plaintext
    MONGODB_URI=mongodb://~~
    my_client_ID = ''
    my_client_secret = 'GOCSPX-'
    JWT_SECRET = ''
    ```
    server-src-controllers-python 폴더 내의 `credentials.json` 파일을 설정합니다. 이는 알약 인식 시 필요한 알약 인식 모델 클래스가 들어있는 구글 드라이브에 접근하는 api를 사용하기 위함입니다.
  _우리의 구글 드라이브에 들어있는 정보이기 때문에 실제로 코드를 실행시키기 위해서는 따로 클래스 정보를 요청하거나, 직접 훈련시킨 모델을 이용할 수 있습니다. 또한, server-src-controllers-python 폴더 내의 pill.py에서 우리의 구글 드라이브에 접근하고, 폴더 아이디를 이용하여 클래스를 추출하는 것을 볼 수 있습니다._
  __5. 브라우저 또는 API 클라이언트를 사용하여 `http://localhost:3000`으로 접속합니다.__

  ___또는 http://10.240.19.83:3000로 서버 접속 가능___
