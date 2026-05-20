import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/authStore'
import {
  errorClass,
  formCard,
  formTitle,
  inputClass,
  submitBtn,
  formGroup,
  labelClass
} from '../styles/common'
import { toast } from 'react-hot-toast'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // auth store
  const login = useAuth(state => state.login)
  const currentUser = useAuth(state => state.currentUser)
  const loading = useAuth(state => state.loading)
  const error = useAuth(state => state.error)

  // LOGIN HANDLER
  const onLogin = async (userLoginObj) => {

    const success = await login(userLoginObj)

    if (success) {

      toast.success("Login successful!")

    } else {

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Login failed"
      )

    }

  }

  // REDIRECT AFTER LOGIN
  React.useEffect(() => {

    if (!loading && currentUser?.role) {

      if (currentUser.role === "USER") {

        navigate("/userdashboard")

      }

      else if (currentUser.role === "AUTHOR") {

        navigate("/authordashboard")

      }

      else if (currentUser.role === "ADMIN") {

        navigate("/admindashboard")

      }

    }

  }, [loading, currentUser, navigate])

  return (

    <div className="flex items-center justify-center min-h-[70vh]">

      <div className={formCard + " shadow-sm border border-[#e8e8ed]"}>

        <h2 className={formTitle}>
          Welcome back
        </h2>

        {error && (
          <p className={errorClass + ' mb-6'}>
            {
              error.response?.data?.message ||
              error.message ||
              'Login failed'
            }
          </p>
        )}

        <form
          onSubmit={handleSubmit(onLogin)}
          className="space-y-4"
        >

          {/* EMAIL */}
          <div className={formGroup}>

            <label className={labelClass}>
              EMAIL ADDRESS
            </label>

            <input
              className={inputClass}
              type='email'
              placeholder='name@example.com'
              {...register('email', {
                required: 'Email required',
                pattern: {
                  value: emailRegex,
                  message: 'Invalid email format'
                },
              })}
            />

            {errors.email?.message && (
              <p className={errorClass + ' mt-2'}>
                {errors.email.message}
              </p>
            )}

          </div>

          {/* PASSWORD */}
          <div className={formGroup}>

            <label className={labelClass}>
              PASSWORD
            </label>

            <input
              className={inputClass}
              type='password'
              placeholder='Enter password'
              {...register('password', {
                required: 'Password required'
              })}
            />

            {errors.password?.message && (
              <p className={errorClass + ' mt-2'}>
                {errors.password.message}
              </p>
            )}

          </div>

          <button
            className={submitBtn + " py-3 mt-4"}
            type='submit'
          >
            Sign In
          </button>

        </form>

      </div>

    </div>

  )

}

export default Login