interface IProps {
  fixed: boolean;
}
export function FixedTitle({ fixed }: IProps) {
  const fixedTitle = fixed ? 'Зафиксили:' : 'В наличии:';
  return (
    <>
      <span>{fixedTitle}</span>
      <br />
    </>
  );
}