import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0" y="0" className="text-primary-500 stroke-current mr-1"
        width={size}
        height={size}
        viewBox="0 0 512 512">
        <g><g xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m167.342 419.751-12.883-17.219c-27.365-36.576-64.003-65.177-106.126-82.847l-16.899-7.089c-19.117-8.019-22.29-33.773-5.69-46.192l49.893-37.328c4.556-3.408 11.012-2.478 14.42 2.077l118.2 157.987z" fill="#fb4297" data-original="#fb4297"/><path d="m208.251 389.145-25.151 18.817-118.198-157.986c-3.413-4.561-9.867-5.491-14.418-2.077l25.152-18.827c4.56-3.402 11.014-2.473 14.418 2.077z" fill="#e2267f" data-original="#e2267f" /></g><path d="m79.307 270.08c-2.354 0-4.679-1.071-6.196-3.103l-.064-.086c-2.554-3.419-1.853-8.26 1.565-10.814 3.42-2.552 8.261-1.852 10.814 1.566l.064.086c2.554 3.419 1.853 8.26-1.565 10.814-1.387 1.037-3.01 1.537-4.618 1.537z" fill="#5b5555" data-original="#5b5555"/></g><g><path d="m463.177 211.383-147.445 147.444c10.272 10.272 20.544 20.545 30.816 30.817l147.445-147.445c4.023-4.023 4.023-10.546 0-14.569l-16.247-16.247c-4.023-4.023-10.546-4.023-14.569 0z" fill="#efe2dd" data-original="#efe2dd" /><g><path d="m482.695 288.449-19.074-19.074c-4.11-4.11-10.774-4.11-14.884 0l-111.229 111.228 33.958 33.958 111.229-111.229c4.11-4.109 4.11-10.773 0-14.883z" fill="#9e9797" data-original="#9e9797"/><path d="m482.691 288.445-18.172-18.172c4.111 4.11 4.111 10.776 0 14.886l-111.227 111.228 18.172 18.173 111.227-111.228c4.111-4.111 4.111-10.776 0-14.887z" fill="#756f6f" data-original="#756f6f"/></g></g></g><g><path d="m456.371 512h-400.742c-5.69 0-10.302-4.612-10.302-10.302v-59.007c0-27.316 19.259-50.845 46.036-56.244l165.218-33.309 164.115 33.27c26.749 5.423 45.976 28.938 45.976 56.231v59.058c.001 5.691-4.612 10.303-10.301 10.303z" fill="#efe2dd" data-original="#efe2dd" /><path d="m352.476 372.575v71.062c0 14.165-11.517 25.682-25.682 25.682-3.873 0-7.778-.907-11.28-2.617l-51.221-25.064c-3.276-1.607-6.057-3.822-8.293-6.439-2.235 2.617-5.007 4.832-8.293 6.439l-51.221 25.064c-3.503 1.71-7.407 2.617-11.28 2.617-14.165 0-25.682-11.517-25.682-25.682v-70.928l97.053-19.573z" fill="#e0d3ce" data-original="#e0d3ce" /><path d="m466.672 442.638v59.06c0 5.69-4.612 10.302-10.302 10.302h-32.863v-81.724c0-20.346-10.683-38.591-27.207-48.81l24.395 4.945c26.754 5.418 45.977 28.937 45.977 56.227z" fill="#e0d3ce" data-original="#e0d3ce" /><g><g><path d="m293.499 289.11v76.542c0 20.707-16.792 37.499-37.499 37.499s-37.499-16.792-37.499-37.499v-76.542z" fill="#f69583" data-original="#f69583" /><path d="m293.499 289.11v46.657c-11.971 3.863-24.58 5.841-37.499 5.841-12.918 0-25.528-1.978-37.499-5.841v-46.657z" fill="#ea806f" data-original="#ea806f" /></g><path d="m158.538 247.542c12.112 42.413 51.16 73.463 97.462 73.463 46.302 0 85.35-31.05 97.462-73.463z" fill="#ffa792" data-original="#ffa792"/><path d="m332.29 286.372c9.695-11.078 17.018-24.285 21.172-38.83h-194.924c4.154 14.545 11.476 27.752 21.172 38.83z" fill="#f69583" data-original="#f69583" /><g><g><g><path d="m399.796 184.297h-22.308v-51.398h22.308c5.6 0 10.14 4.54 10.14 10.14v31.118c0 5.6-4.54 10.14-10.14 10.14z" fill="#b9acac" data-original="#b9acac"/></g><g><path d="m112.204 184.297h22.308v-51.398h-22.308c-5.6 0-10.14 4.54-10.14 10.14v31.118c0 5.6 4.54 10.14 10.14 10.14z" fill="#b9acac" data-original="#b9acac"/></g></g><path d="m138.695 117.305c0-64.786 52.519-117.305 117.305-117.305s117.305 52.519 117.305 117.305z" fill="#b9acac" data-original="#b9acac"/><path d="m373.307 117.307h-34.81c0-58.875-43.36-107.613-99.897-116.019 5.677-.855 11.487-1.288 17.4-1.288 64.788 0 117.307 52.519 117.307 117.307z" fill="#9e9797" data-original="#9e9797"/><path d="m350.65 265.7h-189.3c-16.801 0-30.421-13.62-30.421-30.421v-112.598c0-5.6 4.54-10.14 10.14-10.14h229.861c5.6 0 10.14 4.54 10.14 10.14v112.598c.001 16.801-13.619 30.421-30.42 30.421z" fill="#756f6f" data-original="#756f6f"/><path d="m381.074 122.684v112.599c0 16.792-13.619 30.421-30.421 30.421h-30.009c16.802 0 30.421-13.629 30.421-30.421v-112.599c0-5.604-4.543-10.147-10.137-10.147h29.999c5.604 0 10.147 4.543 10.147 10.147z" fill="#5b5555" data-original="#5b5555"/><g><path d="m333.845 208.794h-155.69c-5.6 0-10.14-4.54-10.14-10.14v-36.687c0-5.6 4.54-10.14 10.14-10.14h155.69c5.6 0 10.14 4.54 10.14 10.14v36.687c0 5.6-4.54 10.14-10.14 10.14z" fill="#8dcafc" data-original="#8dcafc"/><g fill="#b5dbfd"><path d="m245.211 151.827c-18.865 18.965-37.697 37.965-56.525 56.968h47.556c19.135-18.939 38.066-38.083 57.255-56.968z" fill="#b5dbfd" data-original="#b5dbfd" /><path d="m307.65 151.827c-18.989 18.989-37.978 37.978-56.967 56.968h24.862c19.181-18.983 38.384-37.943 57.523-56.968z" fill="#b5dbfd" data-original="#b5dbfd" /></g></g></g></g><g><g><path d="m215.696 350.738-31.481 6.237c-2.374.47-4.085 2.553-4.085 4.974v81.69c0 3.75 3.93 6.202 7.298 4.554l51.222-25.059c2.251-1.101 3.36-3.682 2.609-6.073l-19.741-62.868c-.775-2.469-3.284-3.958-5.822-3.455z" fill="#faf7f7" data-original="#faf7f7" /></g><g><path d="m296.304 350.738 31.481 6.237c2.374.47 4.085 2.553 4.085 4.974v81.69c0 3.75-3.93 6.202-7.298 4.554l-51.222-25.059c-2.251-1.101-3.36-3.682-2.609-6.073l19.741-62.868c.775-2.469 3.284-3.958 5.822-3.455z" fill="#faf7f7" data-original="#faf7f7" /></g></g><g><g><path d="m106.114 387.466v124.534h37.973v-128.444c0-6.602-6.123-11.5-12.564-10.05l-17.37 3.91c-4.7 1.058-8.039 5.232-8.039 10.05z" fill="#fb5fa7" data-original="#fb5fa7" /></g><g><path d="m405.886 387.466v124.534h-37.973v-128.444c0-6.602 6.123-11.5 12.564-10.05l17.37 3.91c4.7 1.058 8.039 5.232 8.039 10.05z" fill="#fb5fa7" data-original="#fb5fa7" /></g></g></g></g></g></svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };