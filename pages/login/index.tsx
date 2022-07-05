import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  type Inputs = {
    name: string;
    age: string;
    gender:string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
      style={{
        width: "full",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px",
      }}
    >
      <p>login page</p>
      <form
        style={{
          width: "full",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          gap: "8px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="name" {...register("name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="age" type="number" {...register("age", { min: 18, max: 99 , required:true })} />
        {/* errors will return when field validation fails  */}
        {errors.age && <span>This field is required</span>}
        <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login;
