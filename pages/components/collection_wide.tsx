export default function Collection () {
    return(
            <div className="bg-white">
                <div className="max-w-2xl px-4 py-8 mx-auto sm:px-6 sm:py-20 lg:max-w-7xl">
                  <div className="relative overflow-hidden rounded-lg lg:h-96">
                    <div className="absolute inset-0">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
                        alt=""
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
                    <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-black bg-opacity-75 rounded-bl-lg rounded-br-lg backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                      <div>
                        <h2 className="text-xl font-bold text-white">Workspace Collection</h2>
                        <p className="mt-1 text-sm text-gray-300">
                          Upgrade your desk with objects that keep you organized and clear-minded.
                        </p>
                      </div>
                      <a
                        href="#"
                        className="flex items-center justify-center flex-shrink-0 px-4 py-3 mt-6 text-base font-medium text-white bg-white bg-opacity-0 border border-white border-opacity-25 rounded-md hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                      >
                        View the collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    )
}