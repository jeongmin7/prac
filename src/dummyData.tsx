const menu:any[] = [
    {
      type: 'group',
      name: '음료',
      children: [
        {
          type: 'group',
          name: '콜드 브루',
          children: [
            { type: 'item', name: '나이트로 콜드 브루', price: 4000 },
            { type: 'item', name: '돌체 콜드 브루', price: 4500 },
            { type: 'item', name: '제주 비자림 콜드 브루', price: 4500 },
            { type: 'item', name: '콜드 브루', price: 3800 },
            {},{}
          ],
        },
        {
          type: 'group',
          name: '프라푸치노',
          children: [
            { type: 'item', name: '애플 쿠키 크림 프라푸치노', price: 4800 },
            { type: 'item', name: '더블 에스프레소 칩 프라푸치노', price: 4800 },
            { type: 'item', name: '모카 프라푸치노', price: 4500 },
            { type: 'item', name: '피스타치오 크림 프라푸치노', price: 4800 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '블렌디드',
          children: [
            { type: 'item', name: '망고 바나나 블렌디드', price: 4200 },
            { type: 'item', name: '딸기 요거트 블렌디드', price: 4200 },
            { type: 'item', name: '자몽 셔벗 블렌디드', price: 4200 },
            { type: 'item', name: '피치 & 레몬 블렌디드', price: 4200 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '티',
          children: [
            { type: 'item', name: '라임 패션 티', price: 3500 },
            { type: 'item', name: '민트 블렌드 티', price: 3500 },
            { type: 'item', name: '아이스 유스베리 티', price: 3500 },
            { type: 'item', name: '아이스 캐모마일 블렌드 티', price: 3500 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '주스',
          children: [
            { type: 'item', name: '한방에 쭉 감당', price: 4500 },
            { type: 'item', name: '파이팅 청귤', price: 4500 },
            { type: 'item', name: '딸기주스', price: 4500 },
            { type: 'item', name: '도와주 흑흑', price: 4500 },
            {},{},
          ],
        },
      ],
    },
    {
      type: 'group',
      name: '디저트',
      children: [
        {
          type: 'group',
          name: '빵',
          children: [
            { type: 'item', name: '트러플 미니 스콘', price: 2000 },
            { type: 'item', name: '보늬밤 몽블랑 데니쉬', price: 2000 },
            { type: 'item', name: '고소한 치즈 베이글', price: 2000 },
            { type: 'item', name: '미니 클래식 스콘', price: 1500 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '케이크',
          children: [
            { type: 'item', name: '밀당 에그 타르트', price: 2300 },
            { type: 'item', name: '마스카포네 티라미수 케이크', price: 5500 },
            { type: 'item', name: '블루베리 쿠키 치즈 케이크', price: 5500 },
            { type: 'item', name: '부드러운 생크림 카스텔라', price: 5000 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '샌드위치',
          children: [
            { type: 'item', name: '애플 까망베르 샌드위치', price: 5600 },
            { type: 'item', name: '트리플 머쉬룸 치즈 샌드위치', price: 5600 },
            { type: 'item', name: '로스트 치킨 샐러드 밀 박스', price: 5600 },
            { type: 'item', name: 'B.E.L.T 샌드위치', price: 5600 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '과일',
          children: [
            { type: 'item', name: '하루 한 컵 RED', price: 3000 },
            { type: 'item', name: '한라봉 가득 핸디 젤리', price: 3000 },
            {},{},{},{},
          ],
        },
        {
          type: 'group',
          name: '스낵',
          children: [
            { type: 'item', name: '리저브 초콜릿 세트' ,price: 3000 },
            { type: 'item', name: '로스티드 아몬드 앤 초콜릿', price: 3000 },
            { type: 'item', name: '마카롱', price: 1500 },
            { type: 'item', name: '자일리톨 캔디 크리스탈 민트', price: 2000 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '아이스크림',
          children: [
            { type: 'item', name: '자바 칩 유기농 바닐라 아이스크림', price: 2000 },
            { type: 'item', name: '넛츠 초콜릿 아포가토', price: 2000 },
            { type: 'item', name: '바닐라 아포가토', price: 2000 },
            {},{},{},
          ],
        },
      ],
    },
    {
      type: 'group',
      name: '굿즈',
      children: [
        {
          type: 'group',
          name: '머그',
          children: [
            { type: 'item', name: '우리 한글 블랙 머그 473ml', price: 6000 },
            { type: 'item', name: '서울 투어 머그 355ml', price: 5000 },
            { type: 'item', name: '스타벅스 1호점 머그 400ml', price: 6000 },
            { type: 'item', name: '서울 제주 데이머그 세트', price: 10000 },
            {},{},
          ],
        },
        {
          type: 'group',
          name: '텀블러',
          children: [
            { type: 'item', name: 'SS 부산 투어 텀블러 355ml', price: 5000 },
            { type: 'item', name: 'SS 블랙 헤리티지 오드리 텀블러 355ml', price: 6000 },
            { type: 'item', name: 'SS 에치드 실버 텀블러 473ml', price: 6000 },
            {},{},{},
          ],
        },
        {
          type: 'group',
          name: '악세사리',
          children: [
            { type: 'item', name: '리저브 오렌지 카드 홀더', price: 4000 },
            { type: 'item', name: '스타벅스 1호점 에코백', price: 8000 },
            { type: 'item', name: '스타벅스 1호점 랩탑 파우치', price: 5000 },
            {},{},{},
          ],
        },
      ],
    },
    {
      type: 'group',
      name: '카드',
      children: [
        { type: 'item', name: '10000원권', price: 10000 },
        { type: 'item', name: '30000원권', price: 30000 },
        { type: 'item', name: '50000원권', price: 50000 },
        { type: 'item', name: '100000원권', price: 100000 },
        {},{},
      ],
    },
  ];

export default menu;