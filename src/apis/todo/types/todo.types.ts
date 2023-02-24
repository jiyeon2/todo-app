// auth의 경우 서버에서 받는 데이터, 타입이 토큰뿐이어서 대부분 components/auth/types에 들ㅇ있다
// 투두의 경우 서버에서 받는 타입을 기준으로 컴포넌트에서 가져다 써도 될거같다

export type TodoData = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};
