import { BadgeCheckIcon, LockClosedIcon, KeyIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Non Fungible',
    description:
      'The credential NFTs store their data based on a widely recognized Open Badges standard. Each credential is unique and minted on chain.',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Privacy Enabled',
    description:
      'The recipients of the credential can encrypt their credential data which allows them to choose who sees the metadata stored.',
    icon: KeyIcon,
  },
  {
    name: 'IPFS and secure metadata',
    description:
      'The contracts store a hash of the metadata to be sure the metadata that is displayed is the same as the data stored which is used for verification purposes.',
    icon: LockClosedIcon,
  },
]

export default function LandingPage() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">

        <main className="mt-36 mx-auto max-w-7xl px-4 sm:mt-36">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Verify your credentials with NFTs</span>{' '}
              {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Digital identities in the future will consist of token assets stored in wallets reimagining the world where “proof of skill” allows for easy verification and communication of knowledge.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="create"
                  className="background-nftcredify-primary w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Create a Credential
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="certificates"
                  className="text-nftcredify-primary w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  View Credentials
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="relative bg-grey-50 py-16 sm:py-24 lg:py-40">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-purple-700 rounded-md shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">NFT Credify </span>
                  <span className="block"> Use Cases </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  From being used for education verification purposes to integration with token gated communities and oppurtunities, the possibilities for nft credify are endless. Proof of successful completion of a course or a program can be brought on chain and verified with a click of a button. 
                </p>
                <a
                  href="dapp"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-nftcredify-primary hover:bg-black-50"
                >
                  Test it out
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="example-screen.png"
                alt="app screenshot"
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}