import Link from "next/link";

export default function ProfileNavigation({ profileMenu, closeProfileMenu }) {
  return (
    <>
      <div className={profileMenu}>
        <div className="border-b py-3 px-5">
          <h3 className="text-gray-600">Wojciech Dobosz</h3>
          <p className="text-gray-600 font-extralight text-wrap">
            wojtek@exmaple.net
          </p>
        </div>
        <div className="flex flex-col py-3 px-6">
          <Link
            className="text-gray-600 hover:text-gray-900 mb-1 font-extralight"
            href="" onClick={closeProfileMenu}>
            View Profile
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 mb-1 font-extralight"
            href="" onClick={closeProfileMenu}>
            Settings
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 mb-1 font-extralight"
            href="" onClick={closeProfileMenu}>
            Inbox
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 mb-1 font-extralight"
            href="" onClick={closeProfileMenu}>
            Privacy
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 mb-1 font-extralight"
            href="" onClick={closeProfileMenu}>
            Notifications
          </Link>
        </div>
        <div className="border-t py-3 px-6">
          <button className="text-gray-600 hover:text-gray-900  font-extralight" onClick={closeProfileMenu}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
