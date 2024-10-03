insert into t_self_check (user_name, check_res, check_score, input_dy)
values (#{user_name}, #{check_res}, #{check_score}, #{input_dy});

select * from t_self_check;