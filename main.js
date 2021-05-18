function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

$("#A").click(function () {
    let type = $("#type").val();
    let preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});

$("#B").click(function () {
    next();
});

let num = 1;
// 객체 "" 안의 값은 id 값
let q = {
    1: { "title": "문제 1번", "type": "EI", "A": "나는 말하기를 좋아해 실수할 때가 종종 있다.", "B": "나는 말이 없어 주변 사람들이 답답해 할 때가 있다." },
    2: { "title": "문제 2번", "type": "EI", "A": "나는 새로운 사람을 만나도 어색하지 않다.", "B": "나는 모르는 사람을 만나는 일이 피곤하다." },
    3: { "title": "문제 3번", "type": "EI", "A": "나는 말하면서 생각하고 대화도중 결심할 때가 있다.", "B": "나는 의견을 말하기에 앞서 신중히 생각하는 편이다." },
    4: { "title": "문제 4번", "type": "SN", "A": "나는 현실적이다.", "B": "나는 미래지향적이다." },
    5: { "title": "문제 5번", "type": "SN", "A": "나는 경험으로 판단한다.", "B": "나는 떠오르는 직관으로 판단한다." },
    6: { "title": "문제 6번", "type": "SN", "A": "나는 약도를 구체적으로 그린다.", "B": "나는 약도를 구체적으로 그리기 어렵다." },
    7: { "title": "문제 7번", "type": "TF", "A": "나는 분석적이다.", "B": "나는 감수성이 풍부하다." },
    8: { "title": "문제 8번", "type": "TF", "A": "나는 감정에 치우치지 않고 의사결정한다.", "B": "나는 상황을 생각하며 의사결정한다." },
    9: { "title": "문제 9번", "type": "TF", "A": "나는 이성과 논리로 행동한다.", "B": "나는 가치관과 사람 중심으로 행동한다." },
    10: { "title": "문제 10번", "type": "JP", "A": "나는 결정에 대해서 잘 변경하지 않는 편이다.", "B": "나는 결정에 대해서 융통성이 있는 편이다." },
    11: { "title": "문제 11번", "type": "JP", "A": "나는 계획에 의해서 일을 처리하는 편이다.", "B": "나는 마지막에 임박했을때 일을 처리하는 편이다." },
    12: { "title": "문제 12번", "type": "JP", "A": "나는 조직적인 분위기에 일이 잘된다.", "B": "나는 즐거운 분위기에 일이 잘된다." }
}
let result={
    "ISTJ" :{"participant":"ISTJ" , "explain":"ISTJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ISFJ" :{"participant":"ISFJ" , "explain":"ISFJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "INFJ" :{"participant":"INFJ" , "explain":"INFJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "INTJ" :{"participant":"INTJ" , "explain":"INTJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ISTP" :{"participant":"ISTP" , "explain":"ISTP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ISFP" :{"participant":"ISFP" , "explain":"ISFP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "INFP" :{"participant":"INFP" , "explain":"INFP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "INTP" :{"participant":"INTP" , "explain":"INTP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ESTP" :{"participant":"ESTP" , "explain":"ESTP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ESFP" :{"participant":"ESFP" , "explain":"ESFP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ENFP" :{"participant":"ENFP" , "explain":"ENFP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ENTP" :{"participant":"ENTP" , "explain":"ENTP 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ESTJ" :{"participant":"ESTJ" , "explain":"ESTJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ESFJ" :{"participant":"ESFJ" , "explain":"ESFJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ENFJ" :{"participant":"ENFJ" , "explain":"ENFJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"},
    "ENTJ" :{"participant":"ENTJ" , "explain":"ENTJ 설명", "img":"KakaoTalk_20210505_192824341.jpg"}

}
function next() {
    if (num === 13) {
        $(".question").hide();
        $(".result").show();
        let mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";

        $("#img").attr("src", result[mbti]["img"]);
        $("#participant").html(result[mbti]["participant"]);
        $("#explain").html(result[mbti]["explain"]);

    } else {
        $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num = num + 1;
    }

}

// console.log($("#test").val());
const test1 = $("#test").val();
const test2 = $("#test2").val();
const test3 = $("#test3").val();

// console.log(test1,test2,test3);

const array = [test1,test2,test3];
console.log(array);
// const array = []