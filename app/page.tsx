import { auth0 } from "@/lib/auth0";
import "./globals.css";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center space-y-8 p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">
            Collaborative Editor
          </h1>
          <p className="text-gray-600">
            A real-time collaborative editing platform. Work together with your
            team in real-time.
          </p>
          <div className="space-y-4">
            <a href="/auth/login?screen_hint=signup" className="block">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Sign up
              </button>
            </a>
            <a href="/auth/login" className="block">
              <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                Log in
              </button>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {session.user.name}!
            </h1>
            <a href="/auth/logout">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                Log out
              </button>
            </a>
          </div>
          <p className="text-gray-600">
            Start collaborating on your documents in real-time.
          </p>
        </div>
      </div>
    </main>
  );
}
