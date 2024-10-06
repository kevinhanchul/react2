insert into t_self_check (user_name, check_res, check_score, input_dy)
values (#{user_name}, #{check_res}, #{check_score}, #{input_dy});

select * from t_self_check;\

insert into t_fep_info (user_name, in_amt, out_amt, rem_amt)
values (#{user_name}, #{in_amt}, #{out_amt}, #{rem_amt})

insert into t_health (user_name, limit_st_dy, limit_ed_dy, input_dy)
values (#{user_name}, #{limit_st_dy}, #{limit_ed_dy}, #{input_dy})

insert into t_race_info (runner_name, race_dy, race_cnt, meet_no)
values (#{runner_name}, #{race_dy}, #{race_cnt}, #{meet_no})

insert into t_runner_info (runner_name,
			runner_age,
			runner_group,
			runner_weight,
			runner_hight,
			runner_win_rate)
values (#{runner_name}, #{runner_age}, #{runner_group}, 
#{runner_weight}, #{runner_hight}, #{runner_win_rate} )

insert into t_self_limit(			user_name,
			st_dy,
			ed_dy,
			day_limit_amt,
			mon_limit_amt,
			year_limit_amt)
values (#{user_name}, #{st_dy}, #{ed_dy}, 
#{day_limit_amt}, #{mon_limit_amt}, #{year_limit_amt})

        select 
			user_name,
			race_no,
			win_type,
			race_amt,
			win_rate,
			ret_amt
		from t_winner_info
		LIMIT 0,1

insert into t_winner_info values ('홍길동', '123', '쌍승', 500, 1.5, 500*1.5);        