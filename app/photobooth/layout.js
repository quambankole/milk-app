import Header from "./component/header";
import Footer from "./component/footer";


export const metadata = {
  title: "Milk Photobooth",
  description: "Milk Photobooth",
};

export default function ({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
