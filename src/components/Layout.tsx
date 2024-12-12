import { Outlet } from 'react-router-dom';
import Container from './Container';
import Header from './Header';

export default function Layout() {
  return (
    <main>
      <Header />
      <Container>
        <section className="bg-white rounded-2xl overflow-hidden relative -top-8 min-h-[550px] py-24">
          <Outlet />
        </section>
      </Container>
    </main>
  );
}
