//require 함수 사용해서 path라는 nodejs 기본 내장 모듈 가져옴
// path는 경로에 대한 다양한 기능 제공
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    // 생략할 파일 확장자
    extensions: ['.vue', '.js'],
    // 경로 별칭 지정, 여러개 가능
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // webpack이 어떤 파일로 진입해서 해석할것인지
  entry: './src/main.js',
  //결과물을 어디에 반환해줄 것인지
  output: {
    //   어떤 경로에 반환할 것인지
    // __dirname은 nodejs의 전역변수. 현재 파일의 경로 정보 가지고 있음
    //두번째 인자는 결과물이 들어갈 파일 이름. 통상적으로 dist, build, public으로 설정

    path: path.resolve(__dirname, 'dist'),
    //   반환되는 파일의 이름이 무엇인지
    // 파일의 이름 생략하면 entry에 접근한 파일로 파일명 출력, filename 직상은 필수가 아니다.
    // filename: "hell.js",

    // dist 폴더를 정리해서 필요없는 파일을 제거 후 만들어준다.
    clean: true,
  },
  module: {
    rules: [
      {
        // 정규 표현식 사용-vue로 끝나는 파일만 찾음
        test: /\.vue$/,
        // vue 파일을 로드해서 해석을 할 수 있게 도움을 주는 패키지이다.
        // 해석을 직접하진 않는다. 해석을 하도록 도움을 주는 패키지
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        // 아래 use에 loader를 입력할 때, 순서가 중요하다.
        // loader를 사용하는 use에 배열 리터럴을 입력하면, 아래에서 위로 평가하고,
        // 오른쪽에서 왼쪽으로 평가된다. 그러니까 제일 먼저 해석이 되어야 하는 것을 나중에 작성을 해라.
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      //   해석해야하는 html 파일이 어디에 위치하는지 명시
      //   템플릿에 지정한 경로를 내부적으로 처리할 때 path.resolve라는 메소드로 실행
      //하지만 htmlplugin은 이 기능이 내장되어있으므로, 그냥 상대경로로 써도 된다.
      //   template: path.resolve(__dirname, "src/index.html"),
      template: './src/index.html',
    }),
    new CopyPlugin({
      // 어디에서 어디로 복사해서 넣어줄것인지
      // to는 output이라는 옵션의 경로를 참조하게 된다. 따라서 생략 가능
      patterns: [{ from: 'static', to: 'dist' }],
    }),
  ],
  //   포트번호 바꿔줄 수 있다.
  //   devServer: {
  //     port: 1234,
  //   },
};
