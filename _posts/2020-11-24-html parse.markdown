---
layout: post
title:  "HTML paresing"
date:   2020-11-24 08:57:00 +0530
categories: Java
comments: true
---

jsoup 은 html parse 라이브러리

Dom구조를 추적하여 원하는 정보를 찾아올 수 있다

[라이브러리 다운로드][link]


```java
	JSONArray getATagValue(String str)
	{
		// content html parsing
		Document doc = Jsoup.parse(str);
		Elements aTag = doc.select("a");
		JSONArray jArray = new JSONArray();
		for (Element e : aTag)
		{ // a 태그 중 href 속성이 있는것만 돌려준다
			if (e.attr("href") != null)
			{
				JSONObject jObj = new JSONObject();
				jObj.put("href", e.attr("href"));
				jObj.put("text", e.text());
				jArray.add(jObj);
			}
		}
		return jArray;
	}
```

[link]: https://jsoup.org/download 