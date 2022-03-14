# Web Project Design

## 天文台获取温度、湿度数据api

链接:```https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc```

数据:

~~~json
{
    "rainfall": {
        "data": [
            {
                "unit": "mm",
                "place": "中西區",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "東區",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "葵青",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "離島區",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "北區",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "西貢",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "沙田",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "南區",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "大埔",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "荃灣",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "屯門",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "灣仔",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "元朗",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "油尖旺",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "深水埗",
                "max": 0,
                "main": ""
            },
            {
                "unit": "mm",
                "place": "九龍城",
                "max": 0,
                "main": ""
            },
            {
                "unit": "mm",
                "place": "黃大仙",
                "max": 0,
                "main": "FALSE"
            },
            {
                "unit": "mm",
                "place": "觀塘",
                "max": 0,
                "main": "FALSE"
            }
        ],
        "startTime": "2022-03-13T14:45:00+08:00",
        "endTime": "2022-03-13T15:45:00+08:00"
    },
    "warningMessage": [
        "火災危險警告為黃色，表示火災危險性頗高。"
    ],
    "icon": [
        51
    ],
    "iconUpdateTime": "2022-03-13T07:50:00+08:00",
    "uvindex": {
        "data": [
            {
                "place": "京士柏",
                "value": 4,
                "desc": "中等"
            }
        ],
        "recordDesc": "過去一小時"
    },
    "updateTime": "2022-03-13T16:02:00+08:00",
    "temperature": {
        "data": [
            {
                "place": "京士柏",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "香港天文台",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "黃竹坑",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "打鼓嶺",
                "value": 28,
                "unit": "C"
            },
            {
                "place": "流浮山",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "大埔",
                "value": 25,
                "unit": "C"
            },
            {
                "place": "沙田",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "屯門",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "將軍澳",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "西貢",
                "value": 24,
                "unit": "C"
            },
            {
                "place": "赤鱲角",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "青衣",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "石崗",
                "value": 29,
                "unit": "C"
            },
            {
                "place": "荃灣可觀",
                "value": 25,
                "unit": "C"
            },
            {
                "place": "荃灣城門谷",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "香港公園",
                "value": 25,
                "unit": "C"
            },
            {
                "place": "筲箕灣",
                "value": 24,
                "unit": "C"
            },
            {
                "place": "九龍城",
                "value": 28,
                "unit": "C"
            },
            {
                "place": "跑馬地",
                "value": 28,
                "unit": "C"
            },
            {
                "place": "黃大仙",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "赤柱",
                "value": 25,
                "unit": "C"
            },
            {
                "place": "觀塘",
                "value": 26,
                "unit": "C"
            },
            {
                "place": "深水埗",
                "value": 27,
                "unit": "C"
            },
            {
                "place": "啟德跑道公園",
                "value": 24,
                "unit": "C"
            },
            {
                "place": "元朗公園",
                "value": 28,
                "unit": "C"
            },
            {
                "place": "大美督",
                "value": 26,
                "unit": "C"
            }
        ],
        "recordTime": "2022-03-13T16:00:00+08:00"
    },
    "tcmessage": "",
    "mintempFrom00To09": "",
    "rainfallFrom00To12": "",
    "rainfallLastMonth": "",
    "rainfallJanuaryToLastMonth": "",
    "humidity": {
        "recordTime": "2022-03-13T16:00:00+08:00",
        "data": [
            {
                "unit": "percent",
                "value": 63,
                "place": "香港天文台"
            }
        ]
    }
}
~~~

天气icon链接: ````https://www.hko.gov.hk/images/HKOWxIconOutline/pic${data.icon[0]}.png` ```
