export default function App({ home }) {
  console.log('Home', home);

  let content;
  if (home === 'test-section') {
    content = <div>Welcome Home!</div>;
  } else if (home === 'payment-section') {
    content = <div>Payment Section</div>;
  } else {
    content = <div>Hello From React!</div>;
  }
  return (
    {content}
  );
}
