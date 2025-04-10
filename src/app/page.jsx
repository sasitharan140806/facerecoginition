import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="forgot-password">Forgot Password</Link>
    </div>
  );
}