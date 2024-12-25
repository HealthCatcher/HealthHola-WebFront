export interface Report {
  id: number;
  username: string;
  reportDate: string;
  description: string;
  status: string;
  type: string;
  docsType: string;  // 여기서 DocsType이 실제로 어떤 타입인지에 따라 string 대신 다른 타입을 지정할 수 있습니다.
}