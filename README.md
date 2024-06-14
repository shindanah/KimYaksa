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
* Client
* Server
    1. [Node.js](<https://nodejs.org/>)를 설치합니다.
    2. 레포지토리를 클론합니다:
    ```bash
    git clone <https://github.com/Ewhacapston-Team4/KimYaksa.git>
    cd KimYaksa/server
    ```
    3. 필요한 패키지를 설치합니다:
    ```bash
    npm install
    ```
    또는
    ```bash
    yarn install
    ```
    4. `.env` 파일을 설정합니다. `.env.example` 파일을 참고하여 데이터베이스 접속 정보와 환경 변수들을 설정합니다.
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=kimyaksa
    PORT=3000
    ```


### 4. 테스트 ###
