---
layout: post
title:  "K 번째 수"
date:   2021-01-09 10:21:00 +0530
categories: Java
---


- K 번째 수 ---- > [문제][link1]
- 풀이 ↓

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
		List<Integer> l = new ArrayList<Integer>();
		for(int i = 0; i<commands.length;i++) {
			int a = commands[i][0];
			int b = commands[i][1];
			int c = commands[i][2];
			
			int[] temp = Arrays.copyOfRange(array, a-1, b); //배열 자르기
			Arrays.sort(temp); //정렬
			l.add(temp[c-1]);
		}
		int[] result = new int[l.size()];
		int size = 0;
		for(Integer value : l) {
			result[size++] = value;
		}
		return result;
	}
}
```

[link1]: https://programmers.co.kr/learn/courses/30/lessons/42748