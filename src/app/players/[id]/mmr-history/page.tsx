import ApexChart from "@/components/ApexChart/ApexChart";

const mockData = [
  { date: "2023-04-30T12:25:00.000Z", value: 2049 },
  { date: "2023-05-01T14:51:00.000Z", value: 2181 },
  { date: "2023-05-02T14:12:00.000Z", value: 2434 },
  { date: "2023-05-03T16:19:00.000Z", value: 2716 },
  { date: "2023-05-04T20:22:00.000Z", value: 2754 },
  { date: "2023-05-05T19:43:00.000Z", value: 2960 },
  { date: "2023-05-06T21:09:00.000Z", value: 2961 },
  { date: "2023-05-07T21:02:00.000Z", value: 2745 },
  { date: "2023-05-08T22:29:00.000Z", value: 2923 },
  { date: "2023-05-09T22:13:00.000Z", value: 2822 },
  { date: "2023-05-10T23:38:00.000Z", value: 2893 },
  { date: "2023-05-11T23:20:00.000Z", value: 2907 },
  { date: "2023-05-13T00:37:00.000Z", value: 2995 },
  { date: "2023-05-14T00:07:00.000Z", value: 2917 },
  { date: "2023-05-15T01:22:00.000Z", value: 2801 },
  { date: "2023-05-16T02:35:00.000Z", value: 2636 },
  { date: "2023-05-17T02:01:00.000Z", value: 2579 },
  { date: "2023-05-18T03:13:00.000Z", value: 2617 },
  { date: "2023-05-19T04:22:00.000Z", value: 2686 },
  { date: "2023-05-20T04:01:00.000Z", value: 2672 },
  { date: "2023-05-21T05:06:00.000Z", value: 2784 },
  { date: "2023-05-22T05:53:00.000Z", value: 2827 },
  { date: "2023-05-23T05:36:00.000Z", value: 2816 },
  { date: "2023-05-24T06:38:00.000Z", value: 2896 },
  { date: "2023-05-25T07:22:00.000Z", value: 2950 },
  { date: "2023-05-26T07:46:00.000Z", value: 2889 },
  { date: "2023-05-27T08:12:00.000Z", value: 2903 },
  { date: "2023-05-28T08:39:00.000Z", value: 2885 },
  { date: "2023-05-29T09:05:00.000Z", value: 2941 },
  { date: "2023-05-30T09:32:00.000Z", value: 2976 },
  { date: "2023-05-31T09:58:00.000Z", value: 3012 },
  { date: "2023-06-01T10:25:00.000Z", value: 3002 },
  { date: "2023-06-02T10:51:00.000Z", value: 3034 },
  { date: "2023-06-03T11:18:00.000Z", value: 3027 },
  { date: "2023-06-04T11:44:00.000Z", value: 3016 },
  { date: "2023-06-05T12:11:00.000Z", value: 2975 },
  { date: "2023-06-06T12:37:00.000Z", value: 2982 },
  { date: "2023-06-07T13:04:00.000Z", value: 3005 },
  { date: "2023-06-08T13:30:00.000Z", value: 2998 },
  { date: "2023-06-09T13:57:00.000Z", value: 3016 },
  { date: "2023-06-10T14:23:00.000Z", value: 3009 },
  { date: "2023-06-11T14:50:00.000Z", value: 2972 },
  { date: "2023-06-12T15:16:00.000Z", value: 2949 },
  { date: "2023-06-13T15:43:00.000Z", value: 2917 },
  { date: "2023-06-14T16:09:00.000Z", value: 2924 },
  { date: "2023-06-15T16:36:00.000Z", value: 2957 },
  { date: "2023-06-16T17:02:00.000Z", value: 2943 },
  { date: "2023-06-17T17:29:00.000Z", value: 2932 },
  { date: "2023-06-18T17:55:00.000Z", value: 2919 },
  { date: "2023-06-19T18:22:00.000Z", value: 2927 },
  { date: "2023-06-20T18:48:00.000Z", value: 2899 },
  { date: "2023-06-21T19:15:00.000Z", value: 2872 },
  { date: "2023-06-22T19:41:00.000Z", value: 2858 },
  { date: "2023-06-23T20:08:00.000Z", value: 2827 },
  { date: "2023-06-24T20:34:00.000Z", value: 2832 },
  { date: "2023-06-25T21:01:00.000Z", value: 2857 },
  { date: "2023-06-26T21:27:00.000Z", value: 2844 },
  { date: "2023-06-27T21:54:00.000Z", value: 2856 },
  { date: "2023-06-28T22:20:00.000Z", value: 2848 },
  { date: "2023-06-29T22:47:00.000Z", value: 2864 },
  { date: "2023-06-30T23:13:00.000Z", value: 2871 },
  { date: "2023-07-01T23:40:00.000Z", value: 2865 },
  { date: "2023-07-02T00:06:00.000Z", value: 2889 },
  { date: "2023-07-03T00:33:00.000Z", value: 2904 },
  { date: "2023-07-04T00:59:00.000Z", value: 2921 },
  { date: "2023-07-05T01:26:00.000Z", value: 2947 },
  { date: "2023-07-06T01:52:00.000Z", value: 2969 },
  { date: "2023-07-07T02:19:00.000Z", value: 2986 },
  { date: "2023-07-08T02:45:00.000Z", value: 2976 },
  { date: "2023-07-09T03:12:00.000Z", value: 3000 },
  { date: "2023-07-10T03:38:00.000Z", value: 2978 },
  { date: "2023-07-11T04:05:00.000Z", value: 2986 },
  { date: "2023-07-12T04:31:00.000Z", value: 2999 },
  { date: "2023-07-13T04:58:00.000Z", value: 3003 },
  { date: "2023-07-14T05:24:00.000Z", value: 2989 },
  { date: "2023-07-15T05:51:00.000Z", value: 2997 },
  { date: "2023-07-16T06:17:00.000Z", value: 2982 },
  { date: "2023-07-17T06:44:00.000Z", value: 2989 },
  { date: "2023-07-18T07:10:00.000Z", value: 2977 },
  { date: "2023-07-19T07:37:00.000Z", value: 2959 },
  { date: "2023-07-20T08:03:00.000Z", value: 2977 },
  { date: "2023-07-21T08:30:00.000Z", value: 2968 },
  { date: "2023-07-22T08:56:00.000Z", value: 2951 },
  { date: "2023-07-23T09:23:00.000Z", value: 2945 },
  { date: "2023-07-24T09:49:00.000Z", value: 2931 },
  { date: "2023-07-25T10:16:00.000Z", value: 2917 },
  { date: "2023-07-26T10:42:00.000Z", value: 2925 },
  { date: "2023-07-27T11:09:00.000Z", value: 2911 },
  { date: "2023-07-28T11:35:00.000Z", value: 2899 },
  { date: "2023-07-29T12:02:00.000Z", value: 2882 },
  { date: "2023-07-30T12:28:00.000Z", value: 2889 },
  { date: "2023-07-31T12:55:00.000Z", value: 2879 },
  { date: "2023-08-01T13:21:00.000Z", value: 2873 },
  { date: "2023-08-02T13:48:00.000Z", value: 2859 },
  { date: "2023-08-03T14:14:00.000Z", value: 2847 },
  { date: "2023-08-04T14:41:00.000Z", value: 2832 },
  { date: "2023-08-05T15:07:00.000Z", value: 2817 },
  { date: "2023-08-06T15:34:00.000Z", value: 2802 },
  { date: "2023-08-07T16:00:00.000Z", value: 2817 },
  { date: "2023-08-08T16:27:00.000Z", value: 2806 },
  { date: "2023-08-09T16:53:00.000Z", value: 2792 },
  { date: "2023-08-10T17:20:00.000Z", value: 2778 },
  { date: "2023-08-11T17:46:00.000Z", value: 2767 },
  { date: "2023-08-12T18:13:00.000Z", value: 2762 },
  { date: "2023-08-13T18:39:00.000Z", value: 2747 },
  { date: "2023-08-14T19:06:00.000Z", value: 2734 },
  { date: "2023-08-15T19:32:00.000Z", value: 2745 },
  { date: "2023-08-16T19:59:00.000Z", value: 2735 },
  { date: "2023-08-17T20:25:00.000Z", value: 2732 },
  { date: "2023-08-18T20:52:00.000Z", value: 2721 },
  { date: "2023-08-19T21:18:00.000Z", value: 2712 },
  { date: "2023-08-20T21:45:00.000Z", value: 2703 },
  { date: "2023-08-21T22:11:00.000Z", value: 2713 },
  { date: "2023-08-22T22:38:00.000Z", value: 2707 },
  { date: "2023-08-23T23:04:00.000Z", value: 2696 },
  { date: "2023-08-24T23:31:00.000Z", value: 2687 },
  { date: "2023-08-25T23:57:00.000Z", value: 2677 },
  { date: "2023-08-26T00:24:00.000Z", value: 2668 },
  { date: "2023-08-27T00:50:00.000Z", value: 2658 },
  { date: "2023-08-28T01:17:00.000Z", value: 2649 },
  { date: "2023-08-29T01:43:00.000Z", value: 2640 },
  { date: "2023-08-30T02:10:00.000Z", value: 2650 },
  { date: "2023-08-31T02:36:00.000Z", value: 2643 },
  { date: "2023-09-01T03:03:00.000Z", value: 2636 },
  { date: "2023-09-02T03:29:00.000Z", value: 2627 },
  { date: "2023-09-03T03:56:00.000Z", value: 2620 },
  { date: "2023-09-04T04:22:00.000Z", value: 2613 },
  { date: "2023-09-05T04:49:00.000Z", value: 2605 },
  { date: "2023-09-06T05:15:00.000Z", value: 2600 },
  { date: "2023-09-07T05:42:00.000Z", value: 2594 },
  { date: "2023-09-08T06:08:00.000Z", value: 2586 },
  { date: "2023-09-09T06:35:00.000Z", value: 2579 },
  { date: "2023-09-10T07:01:00.000Z", value: 2572 },
  { date: "2023-09-11T07:28:00.000Z", value: 2566 },
  { date: "2023-09-12T07:54:00.000Z", value: 2560 },
  { date: "2023-09-13T08:21:00.000Z", value: 2555 },
  { date: "2023-09-14T08:47:00.000Z", value: 2548 },
  { date: "2023-09-15T09:14:00.000Z", value: 2543 },
  { date: "2023-09-16T09:40:00.000Z", value: 2537 },
  { date: "2023-09-17T10:07:00.000Z", value: 2531 },
  { date: "2023-09-18T10:33:00.000Z", value: 2525 },
  { date: "2023-09-19T11:00:00.000Z", value: 2519 },
  { date: "2023-09-20T11:26:00.000Z", value: 2514 },
  { date: "2023-09-21T11:53:00.000Z", value: 2508 },
  { date: "2023-09-22T12:19:00.000Z", value: 2503 },
  { date: "2023-09-23T12:46:00.000Z", value: 2498 },
  { date: "2023-09-24T13:12:00.000Z", value: 2492 },
  { date: "2023-09-25T13:39:00.000Z", value: 2487 },
  { date: "2023-09-26T14:05:00.000Z", value: 2481 },
  { date: "2023-09-27T14:32:00.000Z", value: 2477 },
  { date: "2023-09-28T14:58:00.000Z", value: 2471 },
  { date: "2023-09-29T15:25:00.000Z", value: 2466 },
  { date: "2023-09-30T15:51:00.000Z", value: 2460 },
  { date: "2023-10-01T16:18:00.000Z", value: 2455 },
  { date: "2023-10-02T16:44:00.000Z", value: 2450 },
  { date: "2023-10-03T17:11:00.000Z", value: 2445 },
  { date: "2023-10-04T17:37:00.000Z", value: 2440 },
  { date: "2023-10-05T18:04:00.000Z", value: 2435 },
  { date: "2023-10-06T18:30:00.000Z", value: 2430 },
  { date: "2023-10-07T18:57:00.000Z", value: 2425 },
  { date: "2023-10-08T19:23:00.000Z", value: 2420 },
  { date: "2023-10-09T19:50:00.000Z", value: 2416 },
  { date: "2023-10-10T20:16:00.000Z", value: 2411 },
  { date: "2023-10-11T20:43:00.000Z", value: 2406 },
  { date: "2023-10-12T21:09:00.000Z", value: 2401 },
  { date: "2023-10-13T21:36:00.000Z", value: 2396 },
  { date: "2023-10-14T22:02:00.000Z", value: 2391 },
  { date: "2023-10-15T22:29:00.000Z", value: 2387 },
  { date: "2023-10-16T22:55:00.000Z", value: 2382 },
  { date: "2023-10-17T23:22:00.000Z", value: 2378 },
  { date: "2023-10-18T23:48:00.000Z", value: 2373 },
  { date: "2023-10-19T00:15:00.000Z", value: 2369 },
  { date: "2023-10-20T00:41:00.000Z", value: 2364 },
  { date: "2023-10-21T01:08:00.000Z", value: 2360 },
  { date: "2023-10-22T01:34:00.000Z", value: 2355 },
  { date: "2023-10-23T02:01:00.000Z", value: 2351 },
  { date: "2023-10-24T02:27:00.000Z", value: 2347 },
  { date: "2023-10-25T02:54:00.000Z", value: 2343 },
  { date: "2023-10-26T03:20:00.000Z", value: 2338 },
  { date: "2023-10-27T03:47:00.000Z", value: 2334 },
  { date: "2023-10-28T04:13:00.000Z", value: 2330 },
  { date: "2023-10-29T04:40:00.000Z", value: 2326 },
  { date: "2023-10-30T05:06:00.000Z", value: 2322 },
  { date: "2023-10-31T05:33:00.000Z", value: 2318 },
  { date: "2023-11-01T05:59:00.000Z", value: 2314 },
  { date: "2023-11-02T06:26:00.000Z", value: 2310 },
  { date: "2023-11-03T06:52:00.000Z", value: 2306 },
  { date: "2023-11-04T07:19:00.000Z", value: 2302 },
  { date: "2023-11-05T07:45:00.000Z", value: 2298 },
  { date: "2023-11-06T08:12:00.000Z", value: 2295 },
  { date: "2023-11-07T08:38:00.000Z", value: 2291 },
  { date: "2023-11-08T09:05:00.000Z", value: 2287 },
  { date: "2023-11-09T09:31:00.000Z", value: 2283 },
  { date: "2023-11-10T09:58:00.000Z", value: 2279 },
  { date: "2023-11-11T10:24:00.000Z", value: 2276 },
  { date: "2023-11-12T10:51:00.000Z", value: 2272 },
  { date: "2023-11-13T11:17:00.000Z", value: 2268 },
  { date: "2023-11-14T11:44:00.000Z", value: 2265 },
  { date: "2023-11-15T12:10:00.000Z", value: 2261 },
  { date: "2023-11-16T12:37:00.000Z", value: 2258 },
  { date: "2023-11-17T13:03:00.000Z", value: 2254 },
  { date: "2023-11-18T13:30:00.000Z", value: 2251 },
  { date: "2023-11-19T13:56:00.000Z", value: 2247 },
  { date: "2023-11-20T14:23:00.000Z", value: 2244 },
  { date: "2023-11-21T14:49:00.000Z", value: 2241 },
  { date: "2023-11-22T15:16:00.000Z", value: 2237 },
  { date: "2023-11-23T15:42:00.000Z", value: 2234 },
  { date: "2023-11-24T16:09:00.000Z", value: 2231 },
  { date: "2023-11-25T16:35:00.000Z", value: 2228 },
  { date: "2023-11-26T17:02:00.000Z", value: 2225 },
  { date: "2023-11-27T17:28:00.000Z", value: 2221 },
  { date: "2023-11-28T17:55:00.000Z", value: 2218 },
  { date: "2023-11-29T18:21:00.000Z", value: 2215 },
  { date: "2023-11-30T18:48:00.000Z", value: 2212 },
  { date: "2023-12-01T19:14:00.000Z", value: 2209 },
  { date: "2023-12-02T19:41:00.000Z", value: 2206 },
  { date: "2023-12-03T19:57:00.000Z", value: 2203 },
  { date: "2023-12-04T20:24:00.000Z", value: 2200 },
  { date: "2023-12-05T20:50:00.000Z", value: 2197 },
  { date: "2023-12-06T21:17:00.000Z", value: 2194 },
  { date: "2023-12-07T21:43:00.000Z", value: 2191 },
  { date: "2023-12-08T22:10:00.000Z", value: 2188 },
  { date: "2023-12-09T22:36:00.000Z", value: 2185 },
  { date: "2023-12-10T23:03:00.000Z", value: 2182 },
  { date: "2023-12-11T23:29:00.000Z", value: 2179 },
  { date: "2023-12-12T23:56:00.000Z", value: 2176 },
  { date: "2023-12-13T00:22:00.000Z", value: 2174 },
  { date: "2023-12-14T00:49:00.000Z", value: 2171 },
  { date: "2023-12-15T01:15:00.000Z", value: 2168 },
  { date: "2023-12-16T01:42:00.000Z", value: 2165 },
  { date: "2023-12-17T02:08:00.000Z", value: 2162 },
  { date: "2023-12-18T02:35:00.000Z", value: 2159 },
  { date: "2023-12-19T03:01:00.000Z", value: 2156 },
  { date: "2023-12-20T03:28:00.000Z", value: 2153 },
  { date: "2023-12-21T03:54:00.000Z", value: 2151 },
  { date: "2023-12-22T04:21:00.000Z", value: 2148 },
  { date: "2023-12-23T04:47:00.000Z", value: 2145 },
  { date: "2023-12-24T05:14:00.000Z", value: 2142 },
  { date: "2023-12-25T05:40:00.000Z", value: 2139 },
  { date: "2023-12-26T06:07:00.000Z", value: 2137 },
  { date: "2023-12-27T06:33:00.000Z", value: 2134 },
  { date: "2023-12-28T07:00:00.000Z", value: 2131 },
  { date: "2023-12-29T07:26:00.000Z", value: 2128 },
  { date: "2023-12-30T07:53:00.000Z", value: 2126 },
  { date: "2023-12-31T08:19:00.000Z", value: 2123 },
  { date: "2024-01-01T08:46:00.000Z", value: 2120 },
  { date: "2024-01-02T09:12:00.000Z", value: 2118 },
  { date: "2024-01-03T09:39:00.000Z", value: 2115 },
  { date: "2024-01-04T10:05:00.000Z", value: 2113 },
  { date: "2024-01-05T10:32:00.000Z", value: 2110 },
  { date: "2024-01-06T10:58:00.000Z", value: 2107 },
  { date: "2024-01-07T11:25:00.000Z", value: 2105 },
  { date: "2024-01-08T11:51:00.000Z", value: 2102 },
  { date: "2024-01-09T12:18:00.000Z", value: 2100 },
  { date: "2024-01-10T12:44:00.000Z", value: 2097 },
  { date: "2024-01-11T13:11:00.000Z", value: 2095 },
  { date: "2024-01-12T13:37:00.000Z", value: 2092 },
  { date: "2024-01-13T14:04:00.000Z", value: 2090 },
  { date: "2024-01-14T14:30:00.000Z", value: 2087 },
  { date: "2024-01-15T14:57:00.000Z", value: 2085 },
  { date: "2024-01-16T15:23:00.000Z", value: 2082 },
  { date: "2024-01-17T15:50:00.000Z", value: 2080 },
  { date: "2024-01-18T16:16:00.000Z", value: 2078 },
  { date: "2024-01-19T16:43:00.000Z", value: 2075 },
  { date: "2024-01-20T17:09:00.000Z", value: 2073 },
  { date: "2024-01-21T17:36:00.000Z", value: 2071 },
  { date: "2024-01-22T18:02:00.000Z", value: 2068 },
  { date: "2024-01-23T18:29:00.000Z", value: 2066 },
  { date: "2024-01-24T18:55:00.000Z", value: 2064 },
  { date: "2024-01-25T19:22:00.000Z", value: 2061 },
  { date: "2024-01-26T19:48:00.000Z", value: 2059 },
  { date: "2024-01-27T20:15:00.000Z", value: 2057 },
  { date: "2024-01-28T20:41:00.000Z", value: 2055 },
  { date: "2024-01-29T21:08:00.000Z", value: 2053 },
  { date: "2024-01-30T21:34:00.000Z", value: 2051 },
  { date: "2024-01-31T22:01:00.000Z", value: 2049 },
  { date: "2024-02-01T22:27:00.000Z", value: 2047 },
  { date: "2024-02-02T22:54:00.000Z", value: 2045 },
  { date: "2024-02-03T23:20:00.000Z", value: 2043 },
  { date: "2024-02-04T23:47:00.000Z", value: 2041 },
  { date: "2024-02-05T23:59:00.000Z", value: 2040 },
  { date: "2024-02-06T00:11:00.000Z", value: 2040 },
];

// let data = mockData.map((d) => ({ ...d, date: new Date(d.date) }));
// map date to x property and value to y property
let data = mockData.map((d) => ({ x: d.date, y: d.value }));

const series = [
  {
    name: "MMR",
    data: data,
  },
];

export default function Stats() {
  return (
    <div className="mt-4 rounded-md bg-zinc-900/60 px-8 py-6 backdrop-blur">
      <h2 className="text-2xl font-semibold">MMR History</h2>
      <ApexChart series={series} />
    </div>
  );
}
