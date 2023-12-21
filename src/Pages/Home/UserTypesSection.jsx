// UserTypesSection.js


const UserTypesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Who Benefits from Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* User Type 1: Developers */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-600">
              Streamline your project management, collaborate with teams, and enhance productivity.
            </p>
          </div>

          {/* User Type 2: Corporate Professionals */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
            <p className="text-gray-600">
              Efficiently manage tasks, coordinate projects, and ensure seamless communication.
            </p>
          </div>

          {/* User Type 3: Bankers */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-600">
              Organize financial tasks, collaborate securely, and stay on top of critical deadlines.
            </p>
          </div>

          {/* User Type 4: Custom */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Your Industry</h3>
            <p className="text-gray-600">
              Tailored solutions for your specific needs. Manage tasks efficiently in your industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
