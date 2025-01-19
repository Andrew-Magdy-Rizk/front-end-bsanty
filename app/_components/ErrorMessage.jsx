function ErrorMessage({ error }) {
  console.log(error);
  return (
    <li
      role="alert"
      className="w-full z-10 rounded border-s-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-900"
    >
      <strong className="block font-medium text-red-800 dark:text-red-100">
        {error.status || error.path || error.errors[0].path}
      </strong>

      <p className="mt-2 text-sm text-red-700 dark:text-red-200">
        {error.message || error.msg || error.errors[0].msg}
      </p>
    </li>
  );
}

export default ErrorMessage;
