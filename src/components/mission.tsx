
interface HomeProps {
  id: string;
}


export const Mission: React.FC<HomeProps> = ({id}) => {
  return (
    <div id={id} className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nuestra misión
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Nuestra misión ayudar a todas las personas que requieran mejorar
              su salud y estéticamente verse mejor manteniendo la armonía cuerpo
              mente!
            </p>

            <div className="mt-6 max-w-xl text-base leading-7 text-gray-700">
              <p className="text-xl leading-8 text-gray-600">
                Ademas de brindar un servicio de calidad y calidez a nuestros
                pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
