import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import InputField from "../ui/input-field";
import Button from "../ui/button";
import { fetchData } from "../utils/utility";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetchData("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log("Login successful:", response);
      // Store the authentication token if your API returns one
      if (response.token) {
        localStorage.setItem("authToken", response.token);
      }
      navigate("/"); // Redirect to home after successful login
    } catch (error) {
      console.error("Login failed:", error);
      setErrors((prev) => ({
        ...prev,
        apiError: error.message || "Invalid email or password",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {errors.apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errors.apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-black focus:ring-black mr-2"
              />
              <span className="text-sm">Remember me</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-black underline hover:text-gray-700"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-black text-white hover:bg-gray-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Dont have an account?{" "}
            <Link to="/register" className="text-black underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
