import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginState } from "../state/login";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Mision", href: "#mission" },
  { name: "Servicios", href: "#services" },
  { name: "Contacto", href: "#contact" },
];

export const Navigation = () => {
  const login = useRecoilValue(loginState);
  const setIsLogin = useSetRecoilState(loginState);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        {login.isLoggedIn && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button 
            onClick={() => setIsLogin({ isLoggedIn: false })}
            className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
