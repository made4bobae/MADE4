import {
    createGlobalStyle
} from 'styled-components';
import reset from 'styled-reset'

const globalStyles = createGlobalStyle `

    @font-face {
        font-family: "Spoqa Han Sans";
        src: url('../assets/fonts/spoqahansanslight-webfont.woff2') format('woff2'),
            url('../assets/fonts/spoqahansanslight-webfont.woff') format('woff'),
            url('../assets/fonts/SpoqaHanSansLight.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "Spoqa Han Sans";
        font-style: normal;
        src: url('../assets/fonts/spoqahansansregular-webfont.woff2') format('woff2'),
            url('../assets/fonts/spoqahansansregular-webfont.woff') format('woff'),
            url('../assets/fonts/SpoqaHanSansRegular.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "Spoqa Han Sans";
        src: url('../assets/fonts/spoqahansansbold-webfont.woff2') format('woff2'),
            url('../assets/fonts/spoqahansansbold-webfont.woff') format('woff'),
            url('../assets/fonts/SpoqaHanSansBold.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;       
    }

    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Spoqa Han Sans', 'NotoSans Light', 'Malgun Gothic',
        '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif;
        font-weight: 200;
        font-size: 14px;
        padding-top: 90px;
        
        @media (max-width: 768px) {
            padding-top: 60px;
        }
    }

    h1,
    h2,
    b {
        font-weight: 600;
    }


`

export default globalStyles