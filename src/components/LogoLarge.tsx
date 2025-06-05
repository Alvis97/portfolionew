import React from 'react'

type Props = {
  className?: string;
};

const LogoLarge: React.FC<Props> = ({ className }) => {
  return (
<svg className={className} width="72" height="63" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.817 10.5662C39.3883 -1.61718 31.954 -1.34981 18.8663 11.4126C16.4713 13.6739 14.6981 15.7235 10.4193 21.3999C4.57964 29.2563 3.18324 34.0929 4.40887 43.5751C5.47921 48.4448 6.88541 51.2897 10.7719 54.5341C12.5246 55.9972 14.508 57.2017 16.6753 57.9198C19.4289 58.8321 21.7254 58.8248 25.2016 57.7943C28.0621 56.6401 29.6634 55.762 32.5116 53.3931C34.8703 51.7546 37.3849 51.3618 39.8216 53.2239C44.117 56.211 45.4848 57.4394 48.5935 58.3021C53.6948 59.1585 57.7284 58.788 62.2387 54.9166C67.2498 49.8663 70.9096 41.3754 67.9242 31.7258C65.3858 23.8661 62.1062 19.2352 52.817 10.5662Z" fill="#BBC3A6"/>
<path d="M52.3804 11.126C39.3099 -0.709338 32.0738 -0.44961 19.3351 11.9482C17.004 14.1449 15.2781 16.1358 11.1133 21.6501C5.42941 29.282 4.07026 33.9805 5.2632 43.1917C6.2986 47.8933 7.65691 50.6519 11.3872 53.7796C13.135 55.2451 15.1178 56.4498 17.2872 57.1543C19.9299 58.0125 22.1536 57.9951 25.5015 57.0047C28.2856 55.8835 29.8443 55.0305 32.6165 52.7292C34.9123 51.1376 37.3599 50.756 39.7315 52.5648C43.9124 55.4666 45.2438 56.6599 48.2696 57.498C53.2349 58.3299 57.1608 57.97 61.5509 54.2092C66.4283 49.3032 69.9905 41.0548 67.0848 31.6809C64.6141 24.0458 61.4219 19.5472 52.3804 11.126Z" fill="#B7B49A"/>
<g filter="url(#filter0_f_193_8595)">
<path d="M52.3805 11.126C39.3099 -0.709338 32.0738 -0.44961 19.3351 11.9482C17.004 14.1449 15.2781 16.1358 11.1133 21.6501C5.42941 29.282 4.07026 33.9805 5.2632 43.1917C6.29861 47.8933 7.65691 50.6519 11.3872 53.7796C13.135 55.2451 15.1178 56.4498 17.2872 57.1543C19.93 58.0125 22.1536 57.9951 25.5015 57.0047C28.2856 55.8835 29.8443 55.0305 32.6165 52.7292C34.9123 51.1376 37.3599 50.756 39.7315 52.5648C43.9124 55.4666 45.2438 56.6599 48.2696 57.498C53.2349 58.3299 57.1609 57.97 61.5509 54.2092C66.4283 49.3032 69.9906 41.0548 67.0848 31.6809C64.6141 24.0458 61.4219 19.5472 52.3805 11.126Z" fill="url(#paint0_linear_193_8595)"/>
<path d="M52.3805 11.126C39.3099 -0.709338 32.0738 -0.44961 19.3351 11.9482C17.004 14.1449 15.2781 16.1358 11.1133 21.6501C5.42941 29.282 4.07026 33.9805 5.2632 43.1917C6.29861 47.8933 7.65691 50.6519 11.3872 53.7796C13.135 55.2451 15.1178 56.4498 17.2872 57.1543C19.93 58.0125 22.1536 57.9951 25.5015 57.0047C28.2856 55.8835 29.8443 55.0305 32.6165 52.7292C34.9123 51.1376 37.3599 50.756 39.7315 52.5648C43.9124 55.4666 45.2438 56.6599 48.2696 57.498C53.2349 58.3299 57.1609 57.97 61.5509 54.2092C66.4283 49.3032 69.9906 41.0548 67.0848 31.6809C64.6141 24.0458 61.4219 19.5472 52.3805 11.126Z" stroke="#C1C0BC" stroke-opacity="0.36"/>
</g>
<g filter="url(#filter1_f_193_8595)">
<path d="M48.2696 58.0111C45.2438 57.1731 43.9124 55.9797 39.7315 53.0779C37.3599 51.2691 34.9123 51.6507 32.6165 53.2424C29.8443 55.5436 28.2856 56.3966 25.5015 57.5178C23.0437 58.2449 21.1918 58.4476 19.3351 58.1644C18.6626 58.0618 17.9894 57.8955 17.2865 57.6672C15.1172 56.9626 13.135 55.7582 11.3872 54.2927C7.65691 51.165 6.29861 48.4064 5.2632 43.7048C5.07732 42.2695 4.95339 40.9438 4.89815 39.6995C4.689 34.9891 9.48191 31.3399 11.1133 35.7637C11.684 37.4391 11.953 38.699 11.6642 40.8828C11.4131 42.7806 10.9406 44.6645 11.0211 46.5772C11.226 51.4416 13.5675 54.2628 19.3351 58.1644C21.1918 58.4476 23.0437 58.2449 25.5015 57.5178C29.821 53.7164 32.2187 51.2997 34.7845 46.3038C35.2073 45.4804 35.7747 44.622 36.696 44.5336C37.8603 44.4218 38.6564 45.6452 39.0993 46.7277C40.8399 50.9816 42.9332 53.7253 48.2696 58.0111C50.8845 58.4492 53.2112 58.5568 55.4692 58.0111C59.6188 55.0988 61.4058 52.5772 61.6191 47.3847C61.7184 44.9673 61.5679 41.534 63.957 41.1525C64.0774 41.1332 64.2032 41.1215 64.3348 41.1169C65.2804 41.0836 66.3523 41.3815 67.0042 42.0673C67.8521 42.9593 67.4946 44.3235 67.1256 45.4976C65.9655 49.1882 63.9124 52.347 61.5509 54.7223C59.4729 56.5025 57.4988 57.5207 55.4692 58.0111C53.2112 58.5568 50.8845 58.4492 48.2696 58.0111Z" fill="#737961"/>
</g>
<g filter="url(#filter2_f_193_8595)">
<path d="M48.2711 58.0112C45.2453 57.1732 43.9139 55.9798 39.7331 53.078C37.3614 51.2692 34.9138 51.6508 32.618 53.2425C29.8458 55.5437 28.2872 56.3967 25.503 57.5179C23.0452 58.2451 21.1933 58.4477 19.3366 58.1646C18.6641 58.062 17.9909 57.8956 17.2881 57.6673C15.1187 56.9628 13.1365 55.7583 11.3887 54.2928C7.65842 51.1651 6.30012 48.4065 5.26471 43.705C5.02622 41.8634 4.83507 40.7082 4.7485 39.7811C4.52195 37.3551 7.03404 36.1382 8.05553 38.3503C8.33719 38.9603 8.52228 39.8786 8.46605 40.548C8.32387 42.2407 8.2693 42.6 7.9 45.0311L7.9 45.0311C7.27488 51.7784 12.2333 54.976 19.3366 58.1646C21.1933 58.4477 23.0452 58.2451 25.503 57.5179C29.9743 53.583 32.7834 53.7457 35.4882 48.6049C35.7323 48.141 36.0461 47.6275 36.5116 47.3863C37.0998 47.0816 37.4808 48.2334 37.7491 48.8391C39.6748 53.1859 42.6446 53.4925 48.2711 58.0112C50.886 58.4493 53.2127 58.5569 55.4707 58.0112C60.1725 54.7114 63.9969 53.2516 64.0587 46.6743C64.0677 45.7226 64.0154 44.725 64.361 43.8383C64.4335 43.6524 64.5369 43.5001 64.7124 43.3766C65.5346 42.7982 67.1143 42.8422 67.2229 43.8416C67.2851 44.413 67.2083 45.1143 67.061 45.67C66.0088 49.6369 64.1113 52.1486 61.5524 54.7224C59.4744 56.5026 57.5003 57.5208 55.4707 58.0112C53.2127 58.5569 50.886 58.4493 48.2711 58.0112Z" fill="#909879"/>
</g>
<g filter="url(#filter3_f_193_8595)">
<path d="M52.6459 11.126C45.6084 4.75355 40.2623 1.8875 34.8381 2.53451C32.8366 2.77324 34.3152 5.72629 36.3307 5.7053C41.8305 5.77057 46.2352 8.05989 51.7659 12.109C52.6787 12.7773 53.4738 11.897 52.6459 11.126Z" fill="#7A8065"/>
<path d="M52.6459 11.126C45.6084 4.75355 40.2623 1.8875 34.8381 2.53451C32.8366 2.77324 34.3152 5.72629 36.3307 5.7053C41.8305 5.77057 46.2352 8.05989 51.7659 12.109C52.6787 12.7773 53.4738 11.897 52.6459 11.126Z" stroke="#C1C0BC" stroke-opacity="0.36"/>
</g>
<g filter="url(#filter4_f_193_8595)">
<path d="M26.9678 53.5891C23.1901 55.6401 20.6166 55.9839 17.2249 55.1863C16.1964 54.9444 15.3251 56.1151 15.9362 56.9771C16.0652 57.1591 16.2477 57.2978 16.4589 57.3698C18.1752 57.9555 19.4106 58.1662 21.1094 58.142C22.1245 58.1276 23.1328 57.9544 24.1049 57.6616C25.6264 57.2034 26.6077 56.7492 27.6178 55.8304C29.6073 53.4858 31.7992 52.741 32.8337 51.0634C33.1927 50.4811 33.4228 49.8252 33.7628 49.2315L35.9038 45.4922C36.1392 45.081 36.5767 44.8274 37.0506 44.8274C37.6265 44.8274 38.1329 45.202 38.3215 45.7462C38.9663 47.6066 39.5859 48.7702 40.8344 50.5327C42.1555 52.6993 43.311 54.0444 44.9992 55.4071C46.6295 56.7229 48.5064 57.7893 50.5711 58.1444C52.7122 58.5126 54.3858 58.1204 56.731 57.3046C56.8204 57.2735 56.9026 57.2221 56.9696 57.1553C57.4983 56.6289 56.7226 55.5639 56.0145 55.7988C52.8138 56.8605 50.0572 56.3414 46.0344 53.5891C43.3796 51.2376 41.163 50.4025 40.1844 46.4574L39.2972 44.0733C38.8956 42.9943 38.181 41.7 37.0298 41.6807C35.9102 41.662 35.2086 42.9777 34.8103 44.0242C34.5077 44.8193 34.2056 45.5985 33.9011 46.4574C31.9451 51.0025 29.7508 51.7039 26.9678 53.5891Z" fill="#9BAA8E" fill-opacity="0.52"/>
</g>
<g filter="url(#filter5_f_193_8595)">
<ellipse cx="7.80463" cy="10.7665" rx="7.80463" ry="10.7665" transform="matrix(0.760652 0.649159 -0.694387 0.719602 25.4512 33.3718)" fill="#E3DD9C" fill-opacity="0.08"/>
</g>
<g filter="url(#filter6_f_193_8595)">
<path d="M7.4449 49.7862C7.70176 50.2293 7.96487 50.6383 8.28853 51.0623C8.53883 51.3902 8.8786 51.1041 8.63978 50.7678C7.54914 49.114 7.26595 48.0612 7.17945 46.0236C7.15559 44.8157 7.22089 43.8601 7.57772 41.2794C7.74125 40.2629 7.68823 39.8095 7.17945 39.3163C6.90093 39.0872 6.76611 39.029 6.64842 39.3163C5.95927 41.5052 6.19107 42.4909 6.25015 44.3877C6.28578 45.8522 6.78111 48.641 7.4449 49.7862Z" fill="#A4B999"/>
</g>
<g filter="url(#filter7_f_193_8595)">
<path d="M62.9516 52.2313C62.6947 52.6744 62.4316 53.0834 62.108 53.5074C61.8577 53.8353 61.5179 53.5493 61.7567 53.2129C62.8473 51.5592 63.1305 50.5063 63.217 48.4687C63.2409 47.2608 63.1756 46.3052 62.8188 43.7245C62.6552 42.708 62.7083 42.2546 63.217 41.7614C63.4956 41.5323 63.6304 41.4742 63.7481 41.7614C64.4372 43.9503 64.2054 44.936 64.1463 46.8328C64.1107 48.2973 63.6154 51.0861 62.9516 52.2313Z" fill="#A4B999"/>
</g>
<g filter="url(#filter8_f_193_8595)">
<path d="M16.1335 55.3934C17.1002 55.8501 17.8772 55.8602 19.0978 55.8425C19.3535 55.8388 19.4177 55.4978 19.1803 55.403C19.1645 55.3966 19.1479 55.3919 19.131 55.3889C17.9155 55.1728 16.766 54.7531 15.7231 54.1716C14.1338 53.2854 12.668 52.0328 11.9669 50.4199C11.724 49.8611 11.5139 49.1245 11.3668 48.0875C11.2513 47.2724 11.7356 46.8974 11.0187 46.7647C10.5532 46.7152 10.5932 47.2723 10.6344 47.7143C10.7979 49.4669 11.1682 50.918 12.234 52.277C13.1505 53.4615 14.8942 54.808 16.1335 55.3934Z" fill="#D9E9D2"/>
</g>
<g filter="url(#filter9_f_193_8595)">
<path d="M37.0322 51.1439H36.4899C35.414 51.1439 34.7254 49.9981 35.2305 49.048C35.4781 48.5823 35.9625 48.2913 36.4899 48.2913H37.0322C37.6245 48.2913 38.1553 48.6574 38.3656 49.2112C38.72 50.1446 38.0306 51.1439 37.0322 51.1439Z" fill="#828D7D"/>
</g>
<g filter="url(#filter10_f_193_8595)">
<path d="M47.4161 33.9049C41.4874 22.4247 32.2386 28.0118 22.4165 27.7114C17.5483 27.4918 10.854 25.9207 11.5832 24.4512C13.76 20.6409 27.18 11.9933 32.5397 12.3153C36.7847 12.5342 40.1003 13.3191 46.0713 16.0863C49.2739 17.5705 52.3105 19.496 54.6662 22.1249C58.1297 25.9902 60.4464 31.0029 62.4832 44.496C62.6327 47.7128 57.8674 46.1632 55.2261 44.3212C54.7152 43.965 54.1578 43.5562 53.5192 43.0703C51.2554 41.1752 49.9607 39.7681 47.4161 33.9049Z" fill="#FEFEEF" fill-opacity="0.03"/>
</g>
<g filter="url(#filter11_f_193_8595)">
<path d="M35.885 41.3767C34.1955 44.0006 32.6792 46.0378 31.1271 47.7778C29.1232 50.0243 29.998 51.8055 32.1667 49.7176C33.1408 48.4997 33.9683 47.4046 35.4254 43.2264C35.6806 42.4947 36.3931 42.0172 37.1657 42.0778C37.9237 42.1372 38.5454 42.6984 38.6895 43.4449C39.1956 46.0669 39.6119 47.5279 41.4834 49.7176C43.0506 51.5976 44.1144 49.7386 42.5591 47.8487C41.0792 46.0506 39.6975 43.997 38.19 41.4242C37.947 41.0095 37.5037 40.7521 37.0231 40.7521C36.5626 40.7521 36.1343 40.9895 35.885 41.3767Z" fill="#919191" fill-opacity="0.23"/>
</g>
<g filter="url(#filter12_f_193_8595)">
<path d="M9.6319 23.2287C11.6 20.7789 13.3123 18.6677 14.7864 16.8852C19.6885 10.9576 19.1684 13.3868 14.4526 19.4637C13.8993 20.1766 13.3079 20.9507 12.6652 21.8024C10.3715 24.5191 9.17122 26.7321 7.32386 32.3711C7.27458 32.5215 7.19387 32.6625 7.08801 32.7801C6.36563 33.583 5.09534 33.0166 5.34055 31.9648C5.93649 29.4084 7.13309 27.0057 9.6319 23.2287Z" fill="url(#paint1_linear_193_8595)"/>
</g>
<g filter="url(#filter13_f_193_8595)">
<path d="M20.895 23.8979C17.5496 28.0657 15.1706 29.7279 11.2867 30.8196C9.70493 31.0331 9.17572 30.7296 8.90335 29.3932C8.2078 25.6782 10.2049 22.6825 14.4285 18.0055C15.9225 16.351 17.4886 14.3089 19.7174 14.2639C21.8983 14.2199 23.856 15.8443 23.8119 18.0252C23.7704 20.0759 22.1789 22.2983 20.895 23.8979Z" fill="#DFD88C" fill-opacity="0.11"/>
</g>
<g filter="url(#filter14_df_193_8595)">
<path d="M13.9463 21.0061C11.4908 23.7753 10.1118 25.6508 8.51905 28.4475C7.82908 29.659 6.90142 30.9634 7.19625 32.3095C7.38045 32.9057 10.2561 29.8381 12.8835 26.2851C13.7862 24.824 14.5033 23.5569 15.2515 22.3118C16.1751 20.7748 15.1527 19.6748 13.9463 21.0061Z" fill="#FFEBDD"/>
</g>
<g filter="url(#filter15_df_193_8595)">
<path d="M24.5569 8.47496C24.0289 8.77557 23.6723 8.93303 23.4505 8.96178C22.8823 8.98776 22.7877 8.89816 24.2691 7.979C24.822 7.61958 25.1301 8.14869 24.5569 8.47496Z" fill="#FFEBDD"/>
</g>
<g filter="url(#filter16_df_193_8595)">
<path d="M32.1095 3.38025C31.58 3.52572 31.251 3.58384 31.089 3.55703C31.0624 3.55264 31.0375 3.54221 31.014 3.52981C30.7691 3.40021 30.8264 3.29154 31.9963 2.94837C32.5042 2.78731 32.6234 3.23906 32.1095 3.38025Z" fill="#FFEBDD"/>
</g>
<g filter="url(#filter17_df_193_8595)">
<ellipse cx="37.1507" cy="44.8273" rx="1.08333" ry="2.03761" fill="url(#paint2_radial_193_8595)"/>
</g>
<g filter="url(#filter18_df_193_8595)">
<ellipse cx="38.0159" cy="48.6988" rx="1.08333" ry="1.0188" fill="url(#paint3_radial_193_8595)"/>
</g>
<ellipse cx="34.7683" cy="49.31" rx="0.433333" ry="0.407521" fill="#FBFFFA"/>
<ellipse cx="35.8502" cy="50.3288" rx="0.65" ry="0.611282" fill="white"/>
<g filter="url(#filter19_f_193_8595)">
<path d="M28.7782 48.9864L29.8677 47.3687C31.5778 44.8295 34.721 45.728 33.1359 48.3468C32.6601 49.1329 32.0658 49.9696 31.3461 50.8927C30.83 51.5545 29.8863 51.6871 29.1973 51.213C28.4708 50.713 28.2839 49.7203 28.7782 48.9864Z" fill="#E5D8DD"/>
</g>
<g filter="url(#filter20_f_193_8595)">
<path d="M57.3798 51.8391L58.4693 50.2213C60.1794 47.6821 63.3225 48.5807 61.7375 51.1995C61.2617 51.9855 60.6673 52.8222 59.9476 53.7454C59.4316 54.4072 58.4879 54.5398 57.7989 54.0656C57.0724 53.5657 56.8855 52.573 57.3798 51.8391Z" fill="#E5D8DD"/>
</g>
<g filter="url(#filter21_f_193_8595)">
<path d="M25.6709 52.1732C25.2112 52.4645 24.7744 52.6952 24.3046 52.8944C23.3765 53.288 22.9643 54.4304 23.591 55.1833C23.928 55.5882 24.4833 55.7588 24.997 55.5865C26.0649 55.2282 26.8125 54.8449 27.5464 54.2592C28.1624 53.7676 28.1557 52.8704 27.6165 52.3255C27.111 51.8146 26.2954 51.7775 25.6709 52.1732Z" fill="#FEFDF5"/>
</g>
<g filter="url(#filter22_f_193_8595)">
<path d="M53.609 53.9756C53.0513 54.0153 52.5449 54.0115 52.0234 53.9639C51.0191 53.8721 50.1044 54.6323 50.2555 55.5705C50.3427 56.1119 50.7735 56.5539 51.3477 56.6446C52.4684 56.8215 53.3239 56.8239 54.288 56.6385C55.0387 56.4942 55.4584 55.7625 55.2796 55.0624C55.1002 54.3596 54.3757 53.9212 53.609 53.9756Z" fill="#FEFDF5"/>
</g>
<ellipse cx="25.4508" cy="43.6047" rx="0.65" ry="0.407521" fill="#E0DDBF"/>
<ellipse cx="55.3492" cy="45.2349" rx="0.65" ry="0.407521" fill="#E0DDBF"/>
<ellipse cx="56.65" cy="42.3822" rx="0.65" ry="0.407521" fill="#E0DDBF"/>
<defs>
<filter id="filter0_f_193_8595" x="3.86523" y="1.44513" width="65.2666" height="57.4229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter1_f_193_8595" x="0.891602" y="29.767" width="70.6338" height="32.6141" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter2_f_193_8595" x="0.734375" y="33.1906" width="70.5098" height="29.1906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter3_f_193_8595" x="31.8877" y="0.445129" width="23.1055" height="13.9006" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter4_f_193_8595" x="13.7334" y="39.6805" width="45.4111" height="20.6028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter5_f_193_8595" x="10.3652" y="32.9277" width="27.0938" height="26.5164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter6_f_193_8595" x="5.66504" y="38.622" width="3.55566" height="13.085" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter7_f_193_8595" x="61.4758" y="41.3672" width="2.95566" height="12.485" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter8_f_193_8595" x="10.4113" y="46.5616" width="9.1168" height="9.48557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter9_f_193_8595" x="34.0615" y="47.2913" width="5.39844" height="4.85266" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter10_f_193_8595" x="7.52832" y="8.30658" width="58.958" height="42.0517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter11_f_193_8595" x="26.002" y="36.7521" width="21.3184" height="17.8932" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter12_f_193_8595" x="3.30957" y="11.4819" width="16.9238" height="23.6775" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter13_f_193_8595" x="4.76758" y="10.263" width="23.0449" height="24.6188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter14_df_193_8595" x="3.13965" y="19.9094" width="16.4688" height="20.4746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.591001 0 0 0 0 0.516008 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_193_8595"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_193_8595" result="shape"/>
<feGaussianBlur stdDeviation="0.25" result="effect2_foregroundBlur_193_8595"/>
</filter>
<filter id="filter15_df_193_8595" x="19.0664" y="7.65864" width="9.79688" height="9.30681" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_193_8595"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_193_8595" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect2_foregroundBlur_193_8595"/>
</filter>
<filter id="filter16_df_193_8595" x="26.8965" y="2.71412" width="9.54492" height="8.84923" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_193_8595"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_193_8595" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect2_foregroundBlur_193_8595"/>
</filter>
<filter id="filter17_df_193_8595" x="32.0674" y="42.5897" width="10.167" height="12.2752" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.568172 0 0 0 0 0.559587 0 0 0 0 0.488048 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_193_8595"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_193_8595" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect2_foregroundBlur_193_8595"/>
</filter>
<filter id="filter18_df_193_8595" x="32.9326" y="47.48" width="10.167" height="10.2376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.568172 0 0 0 0 0.559587 0 0 0 0 0.488048 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_193_8595"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_193_8595" result="shape"/>
<feGaussianBlur stdDeviation="0.1" result="effect2_foregroundBlur_193_8595"/>
</filter>
<filter id="filter19_f_193_8595" x="28.402" y="45.7607" width="5.26738" height="5.83495" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.05" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter20_f_193_8595" x="57.0035" y="48.6134" width="5.26738" height="5.83495" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.05" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter21_f_193_8595" x="23.191" y="51.8057" width="4.92363" height="3.94759" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.05" result="effect1_foregroundBlur_193_8595"/>
</filter>
<filter id="filter22_f_193_8595" x="50.1393" y="53.8564" width="5.28105" height="3.02104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.05" result="effect1_foregroundBlur_193_8595"/>
</filter>
<linearGradient id="paint0_linear_193_8595" x1="24.7986" y1="57.868" x2="59.9452" y2="-14.9986" gradientUnits="userSpaceOnUse">
<stop stop-color="#DEDAB3"/>
<stop offset="1" stop-color="#515044"/>
</linearGradient>
<linearGradient id="paint1_linear_193_8595" x1="22.1986" y1="9.37297" x2="6.34215" y2="35.9287" gradientUnits="userSpaceOnUse">
<stop stop-color="#868970"/>
<stop offset="0.646008" stop-color="#9DA380"/>
<stop offset="1" stop-color="#949C7D"/>
</linearGradient>
<radialGradient id="paint2_radial_193_8595" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37.1507 44.8273) rotate(90) scale(2.03761 1.08333)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FCFCD9"/>
</radialGradient>
<radialGradient id="paint3_radial_193_8595" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.016 48.6988) rotate(90) scale(1.0188 1.08333)">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FCFCD9"/>
</radialGradient>
</defs>
</svg>

  )
}

export default LogoLarge
