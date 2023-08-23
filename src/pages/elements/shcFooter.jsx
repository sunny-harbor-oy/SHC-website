
export default function SHCFooter() {
  return (
    <div id="footerWrapper" className="bg-main">
      <div className="bg-main py-6 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7x1 px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex justify-center">
            <div>
              <h1 className="font-medium text-lg mb-4">
                Sunny Harbor Consulting
              </h1>
              <p className="text-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt consequuntur excepturi et sapiente cum quasi labore
                maxime officia iusto. Officiis nemo ab repellendus ipsam
                consectetur debitis quis officia reiciendis neque.
              </p>
            </div>
          </div>
          <div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="font-medium text-h1 text-lg mb-4">
                Yhteystiedot
              </h1>
              <div className="text-neutral-200">
                <p className="mb-2">Aurinkoinenkatu 4B, 00990 HELSINKI</p>
                <p className="mb-2">sunnyharborconsulting@gmail.com</p>
                <p className="mb-2">+358 000000000</p>
                <p className="mb-2">Y-Tunnus: 0000000-0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="font-medium text-h2 text-sm text-center mt-6">
        © 2023 Sunny Harbor Consulting
      </h2>
    </div>
  );
}
