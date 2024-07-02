const DetailPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 h-dvh">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DetailPageLayout;
